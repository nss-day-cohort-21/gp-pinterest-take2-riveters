"use strict";
// console.log("App, yo!");

const app = angular.module("PinterestApp", ["ngRoute"]);

let isAuth = (authFactory) => new Promise((resolve, reject) => {
    // console.log("authFactory is", authFactory);
    authFactory.isAuthenticated()
        .then((userExists) => {
            if (userExists) {
                // console.log("Authenticated, go ahead");
                resolve();
            } else {
                console.log("Authentication reject, GO AWAY");
                reject();
            }
        });
});

app.config(($routeProvider) => {
    $routeProvider
        .when('/login', {
            templateUrl: 'partials/loggedout.html',
            controller: 'authCtrl'
        })
        .when('/', {
            templateUrl: 'partials/user.boards.html',
            controller: 'BoardsController',
            resolve: {isAuth}
        })
        .when('/board-view', {
            templateUrl: 'partials/user.boards.html',
            controller: 'BoardsController',
            resolve: {isAuth}
        })
        .when('/profile', {
            templateUrl: 'partials/user.boards.html',
            controller: 'BoardsController',
            resolve: {isAuth}
         })
        .when('/pin-view', {
            templateUrl: 'partials/user.pins.html',
            controller: 'pinsController',
            resolve: {isAuth}
        })
        // .when('/add-board', {
        //     templateUrl: 'partials/addboard.html',
        //     controller: 'addBoard',
        //     resolve: {isAuth}
        // })
        .when('/add-pin', {
            templateUrl: 'partials/addpins.html',
            controller: 'addPin',
            resolve: {isAuth}
        })
        .when('/board/:itemId', {
            templateUrl: 'partials/singleBoard.html',
            controller: 'BoardDetails',
            resolve: {
                isAuth
            }
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

