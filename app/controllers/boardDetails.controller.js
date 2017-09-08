"use strict";

app.controller("BoardDetails", function ($scope, $routeParams, UserBoards){

    $scope.allBoardPins = [];

    const showSingleBoard = function () {
        // debugger;
        // console.log("itemId", $routeParams);
        UserBoards.getBoardPins($routeParams.itemId)
            .then((data) => {
                // debugger
                $scope.allBoardPins = data;
                $scope.allBoardPins.id = $routeParams.itemId;
            })
            .then(() => {
                UserBoards.getBoardName($routeParams.itemId)
                .then((boardPins)=>{
                    $scope.allBoardPinsName = boardPins;
                    console.log("$scope.allBoardPins", $scope.allBoardPins);
                });
            });
        };

    // $scope.allPins = [];
    // const showSinglePin = function() {
    //     UserBoards.getBoardPins($routeParams.itemId)
    //         .then((data) => {
    //             $scope.allBoardPins = data;
    //             $scope.allBoardPins.id = $routeParams.itemId;
    //             console.log('itemId', $routeParams,itemId);
    //         })
    //         .then(() => {
    //             UserBoards.getBoardPins($routeParams.itemId);
    //             .then((boardPins) => {
    //                 $scope.allBoardPinsName = boardPins;
    //                 console.log('$scope.allBoardPins delete', $scope.allBoardPins.boardid);
    //             });
    //         });
    // };

        showSingleBoard();
        // thosePinsareBoard();
    });
