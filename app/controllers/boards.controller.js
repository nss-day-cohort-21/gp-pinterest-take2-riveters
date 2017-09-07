'use strict';

console.log("boards.controller");

app.controller("BoardsController", function($scope, authFactory, UserBoards){

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
        // console.log("$$$$$pulledInfo", pulledInfo);
        // console.log("$scope.userDeets", $scope.userDeets);
    };

    $scope.deleteBoard = function(boardId){
        console.log("heeeeeeeeeyyyyyyyy");
            UserBoards.deleteBoard(boardId)
            .then( (irrelevant) => {
            
                $route.reload();
            });
        };

    showAllBoards();
    getThoseDeets();

});
