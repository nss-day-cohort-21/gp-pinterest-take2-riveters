"use strict";
app.controller("userCtrl", function ($scope, $window, userFactory, $location) {

    console.log("Yo! The userCtrl is loaded!");
    $scope.account = {
        email: "",
        password: ""
    };

    $scope.register = () => {
        console.log("you clicked on register");
        userFactory.register({
                email: $scope.account.email,
                password: $scope.account.password
            })
            .then((userData) => {
                console.log("User controller newUser", userData);
                $scope.logIn();
            }, (error) => {
                console.log("error creating new user", error);
            });
    };

    $scope.logIn = () => {
        userFactory.logIn($scope.account)
            .then(() => {
                //Option One
                //$location.path("#!/task-list");
                //need to update the view
                //$scope.apply();
                //Option Two
                $window.location.href = "#!/task-list";
            });
    };

    $scope.loginGoogle = () => {
        console.log("you clicked on google login");

        userFactory.authWithProvider()
            .then((result) => {
                let user = result.user.uid;
                $location.path("/task-list");
                //$scope.apply???
                $scope.apply();
            }).catch((error) => {
                console.log("error with google login, yo!");
                let errorCode = error.code;
                let errorMessage = error.message;
            });

    };
});