'use strict';

console.log("pins.controller");

app.controller("pinsController", function($scope, authFactory, UserBoards, $routeParams){

    $scope.pins = [];
    let user = authFactory.getCurrentUser();

    const showAllPins = function() {
        UserBoards.getAllPins(user)
            .then((pins) => {
                // debugger;
                console.log("showAllPins", pins);
                $scope.pins = pins;
            });
    };

    const getPinUglyId = function(){
        console.log("$$$$$Route", $routeParams.itemId);
    };

    getPinUglyId();
    showAllPins();
});
