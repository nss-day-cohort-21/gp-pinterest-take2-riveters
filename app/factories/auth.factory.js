"use strict";

// console.log("auth.factory");

app.factory("authFactory", function ($q, $http, FBCreds) {
    let currentUser = null;
    let AddNewUserObj = {};

    const isAuthenticated = function () {
        // console.log("authFactory: isAuthenticated");
        return new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    currentUser = user.uid;
                    let userName = user.displayName;
                    let userEmail = user.email;
                    let userPhoto = user.photoURL;
                    console.log("user", user.uid);
                    console.log("userName", userName);
                    console.log("useremail", userEmail);
                    console.log("userPhoto", userPhoto);
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        });
    };

    const getCurrentUser = function () {
        return currentUser;
    };

    const logIn = function (userObj) {
        return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
            .catch(function (error) {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log("error", errorCode, errorMessage);
            });
    };

    const logOut = function () {
        console.log("logoutUser");
        return firebase.auth().signOut();
    };

    const register = function (userObj) {
        return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
        .then(function addNewUser(userObj){
                let AddNewUserObj = {
                    uid: userObj.uid,
                    email: userObj.email,
                    photo: "",
                    name: ""
                };
                console.log("newUSER.uid", AddNewUserObj);
                let newObj = JSON.stringify(AddNewUserObj);
                return $http.post(`${FBCreds.databaseURL}/users.json`, newObj)
                    .then((data) => {
                        console.log("data", data);
                        return data;
                    }, (error) => {
                        let errorCode = error.code;
                        let errorMessage = error.message;
                        console.log("error", errorCode, errorMessage);
                    });
        })
        .catch(function (error) {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log("error", errorCode, errorMessage);
            });
    };

    let provider = new firebase.auth.GoogleAuthProvider();

    let authWithProvider = function () {
        return firebase.auth().signInWithPopup(provider);
    };

    return {
        getCurrentUser,
        logIn,
        logOut,
        register,
        isAuthenticated,
        authWithProvider
    };

});