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
        .when('/', {
            templateUrl: 'partials/loggedout.html',
            controller: 'authCtrl'
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

//modal

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });
      $('#modal1').modal('open');
      $('#modal1').modal('close');
