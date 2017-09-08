'use strict';

console.log("boards.controller");

app.controller("BoardsController", function($scope, authFactory, UserBoards, $route){

    $scope.boards = [];
    let user = authFactory.getCurrentUser();

    const showAllBoards = function () {
        UserBoards.getAllBoards(user)
            .then((boards) => {
                console.log("showAllboards", boards);
                $scope.boards = boards;
            });
    };

    $scope.userDeets = [];
    let getThoseDeets = function(){
         let pulledInfo = authFactory.getUserDeets();
         $scope.userDeets = pulledInfo.splice(0,1);
    };

    $scope.deleteBoard = function(boardId){
            UserBoards.deleteBoard(boardId)
            .then(() => {
                $route.reload();
            });
        };

    showAllBoards();
    getThoseDeets();

});
