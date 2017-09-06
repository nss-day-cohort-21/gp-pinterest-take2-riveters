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

    showAllBoards();

});
