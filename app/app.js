"use strict";
console.log("App, yo!");

const app = angular.module("PinterestApp", ["ngRoute"]);

let isAuth = (authFactory) => new Promise((resolve, reject) => {
    console.log("authFactory is", authFactory);
    authFactory.isAuthenticated()
        .then((userExists) => {
            if (userExists) {
                console.log("Authenticated, go ahead");
                resolve();
            } else {
                console.log("Authentication reject, GO AWAY");
                reject();
            }
        });
});

app.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/user.pins.html',
            controller: 'getController',
            resolve: {isAuth}
        })
        .when('/login', {
            templateUrl: 'partials/user.html',
            controller: 'authCtrl'
        })
        .when('/pin-view', {
            templateUrl: 'partials/user.pins.html',
            controller: 'getController',
            resolve: {isAuth}
        })
        .when('/board-view', {
            templateUrl: 'partials/user.boards.html',
            controller: 'getController',
            resolve: {isAuth}
        })
        .otherwise('/');
});
// forces something to run whenthe app initially starts up
app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };
    firebase.initializeApp(authConfig);
});