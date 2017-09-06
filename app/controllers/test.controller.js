"use strict";

console.log("test controller, yo!");

app.controller("testFactory", function ($scope, UserBoards) {
    UserBoards.getAllPins()
        .then(function (pinCollection) {
            let pinArray = [];
            console.log(pinArray);
            let pinKeys = Object.keys(pinCollection);
            pinKeys.forEach((item) => {
                pinArray.push(pinCollection[item]);
            });
            console.log("pinCollection", pinCollection);
            $scope.pins = pinArray;
        });

        UserBoards.getAllBoards()
        .then(function (boardCollection) {
            let boardArray = [];
            console.log(boardArray);
            let boardKeys = Object.keys(boardCollection);
            boardKeys.forEach((item) => {
                boardArray.push(boardCollection[item]);
            });
            console.log("boardCollection", boardCollection);
            $scope.board = boardArray;
        });


});


