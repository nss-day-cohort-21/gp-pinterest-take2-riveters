"use strict";

// console.log("auth.factory");

app.factory("authFactory", function ($q, $http, FBCreds) {
    let currentUser = null;
    let AddNewUserObj = [];

    const isAuthenticated = function () {
        // console.log("authFactory: isAuthenticated");
        return new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    currentUser = user.uid;
                    AddNewUserObj.push({
                        userName: user.displayName,
                        userEmail: user.email,
                        userPhoto: user.photoURL
                    });
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        });
    };

    const getUserDeets = function(){
        return AddNewUserObj;
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
                let AddNewUsertoFB = {
                    uid: userObj.uid,
                    userEmail: userObj.email,
                    userPhoto: "app/assets/images/rosie.png",
                    userName: "Rosie Rivets"
                };
                AddNewUserObj.push(AddNewUsertoFB);
                console.log("newUSER.uid", AddNewUsertoFB);
                let newObj = JSON.stringify(AddNewUsertoFB);
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
        authWithProvider,
        getUserDeets
    };

});