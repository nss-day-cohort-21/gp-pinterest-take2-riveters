'use strict';

console.log("boards.controller");

app.controller("BoardsController", function($scope, authFactory){

    $scope.boards = [];
    let user = authFactory.getCurrentUser();
    
    const showAllBoards = function () {
        authFactory.getAllTasks(user)
            .then((tasks) => {
                console.log("showAllTasks", tasks);
                $scope.tasks = tasks;
            });
    };

});
