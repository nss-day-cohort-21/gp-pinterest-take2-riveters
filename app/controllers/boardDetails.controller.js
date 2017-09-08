"use strict";

app.controller("BoardDetails", function ($scope, $routeParams, UserBoards, $route, $q, $http, FBCreds) {

    $scope.allBoardPins = [];
    const showSingleBoard = function () {
        UserBoards.getBoardPins($routeParams.itemId)
            .then((data) => {
                $scope.allBoardPins = data;
                $scope.allBoardPins.id = $routeParams.itemId;
                console.log("SSSSSitemId", data);
            })
            .then(() => {
                UserBoards.getBoardName($routeParams.itemId)
                    .then((boardPins) => {
                        $scope.allBoardPinsName = boardPins;
                        console.log("$scope.allBoardPins", $scope.allBoardPinsName);
                    });
            });
    };

    $scope.getDeletePinStuff = (pinUglyId) => {
        return $q((resolve, reject) => {
            $http.delete(`${FBCreds.databaseURL}/pins/${pinUglyId}.json`)
                .then((response) => {
                    resolve(response);
                    $route.reload();
                })
                .catch((error) => {
                    reject(error);
                });
                
        });
    };



    showSingleBoard();
});