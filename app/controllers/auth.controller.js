"use strict";
// console.log("auth controller, YO!");

app.controller("authCtrl", function ($scope, $window, authFactory, $location) {

    console.log("Yo! The authCtrl is loaded!");
    $scope.account = {
        email: "",
        password: "",
        name: ""
    };

    $scope.register = () => {
        console.log("you clicked on register");
        authFactory.register({
                email: $scope.account.email,
                password: $scope.account.password,
                name: $scope.account.name
            })
            .then((userData) => {
                console.log("User controller newUser", userData);
                $scope.logIn();
            }, (error) => {
                console.log("error creating new user", error);
            });
    };

    $scope.logIn = () => {
        authFactory.logIn($scope.account)
            .then(() => {
                $window.location.href = "#!/board-view";
            });
    };

    $scope.loginGoogle = () => {
        console.log("you clicked on google login");
        authFactory.authWithProvider()
            .then((result) => {
                let user = result.user.uid;
                console.log("USER", user);
                console.log("USER RESULT", result);
                $location.path("/board-view");
                $scope.apply();
            }).catch((error) => {
                console.log("error with google login, yo!");
                let errorCode = error.code;
                let errorMessage = error.message;
            });

    };
});