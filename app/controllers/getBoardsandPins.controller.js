"use strict";

console.log("Getting all the stuff controller, yo!");

app.controller("getController", function ($scope, UserBoards) {

    $scope.boards = [];
    $scope.pins = [];
    let user = authFactory.getCurrentUser();

const showAllPins = function() {
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
};

const showAllBoards = function() {
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
};
