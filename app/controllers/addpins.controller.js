'use strict';

console.log('Add Pins.controller');

app.controller("addPin", function ($scope, $location, UserBoards) {
    
        $scope.title = "New Pin";
        $scope.submitButtonText = "Add New Pin";
        // let user = userFactory.getCurrentUser();
    
        $scope.pin = {
            title: "",
            uid: "user",
            img: "",
            description: "",
            tags: "",
            url: "",
            boardid: ""
        };
    
        $scope.submitPin = function () {
            UserBoards.addPin($scope.pin)
                .then((data) => {
                    $location.url("/pin-view");
                });
        };
    });


