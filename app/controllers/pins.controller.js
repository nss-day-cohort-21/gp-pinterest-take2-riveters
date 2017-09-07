'use strict';

console.log("pins.controller");

app.controller("pinsController", function($scope, authFactory, UserBoards){

    $scope.pins = [];
    let user = authFactory.getCurrentUser();

    const showAllPins = function() {
        UserBoards.getAllPins(user)
            .then((pins) => {
                console.log("showAllPins", pins);
                $scope.pins = pins;
            });
    };

    showAllPins();
});
