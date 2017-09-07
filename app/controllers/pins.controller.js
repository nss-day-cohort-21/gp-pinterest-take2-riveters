'use strict';

console.log("pins.controller");

app.controller("pinsController", function($scope, authFactory) {

    $scope.pins = [];
    let user = authFactory.getCurrentUser();

    const showAllPins = function() {
        authFactory.getAllPins(user)
            .then((pins) => {
                console.log("showAllPins", pins);
                $scope.pins = pins;
            });
    };
showAllPins();
});
