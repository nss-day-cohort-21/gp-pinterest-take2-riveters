"use strict";

app.controller("BoardDetails", function ($scope, $routeParams, UserBoards){
        
    $scope.allBoardPins = [];
    const showSingleBoard = function () {
            UserBoards.getBoardPins($routeParams.itemId)
                .then((data) => {
                    $scope.allBoardPins = data;
                    $scope.allBoardPins.id = $routeParams.itemId;
                    console.log("itemId", $routeParams.itemId);
                })
                .then(()=>{
                    UserBoards.getBoardName($routeParams.itemId)
                    .then((boardPins)=>{
                        $scope.allBoardPinsName = boardPins;
                        console.log("$scope.allBoardPins", $scope.allBoardPins);
                    });
                });
        };

        showSingleBoard();
        // thosePinsareBoard();
    });