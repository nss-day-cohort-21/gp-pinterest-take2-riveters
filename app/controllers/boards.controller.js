'use strict';

console.log("boards.controller");

app.controller("BoardsController", function($scope, authFactory){

    $scope.boards = [];
    let user = authFactory.getCurrentUser();
    
    const showAllBoards = function () {
        authFactory.getAllBoards(user)
            .then((boards) => {
                console.log("showAllboards", boards);
                $scope.boards = boards;
            });
    };

});
