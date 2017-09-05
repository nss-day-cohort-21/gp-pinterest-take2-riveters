"use strict";
console.log("App, yo!");

const app = angular.module("MyApp", ["ngRoute"]);

let isAuth = (userFactory) => new Promise((resolve, reject) => {
    console.log("userFactory is", userFactory);
    userFactory.isAuthenticated()
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
            templateUrl: 'partials/list.html',
            controller: 'listCtrl',
            resolve: {isAuth}
        })
        .otherwise('/');
});
//forces something to run whenthe app initially starts up
app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };
    firebase.initializeApp(authConfig);
});