'use strict';

// console.log('Add Pins.controller');

app.controller("addPin", function ($scope, $location, UserBoards, authFactory) {
    
        $scope.title = "New Pin";
        $scope.submitButtonText = "Add New Pin";
        let user = authFactory.getCurrentUser();
    
        $scope.pin = {
            title: "",
            uid: user,
            img: "",
            description: "",
            tags: "",
            url: "",
            boardid: ""
        };
    
        $scope.submitPin = function () {
            console.log("WHYYY");
            UserBoards.addNewPin($scope.pin)
                .then((data) => {
                    $location.url("/pin-view");
                });
        };
    });


