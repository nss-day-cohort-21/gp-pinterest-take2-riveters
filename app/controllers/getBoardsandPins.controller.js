"use strict";

// console.log("Getting all the stuff controller, yo!");

app.controller("getController", function ($scope, UserBoards) {

    UserBoards.getAllPins()
        .then(function (pinCollection) {
            let pinArray = [];
            // debugger;
            console.log('pinArray', pinArray);
            let pinKeys = Object.keys(pinCollection);
            pinKeys.forEach((item) => {
                pinArray.push(pinCollection[item]);
            });
            // debugger;
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


