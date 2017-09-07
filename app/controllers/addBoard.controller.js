'use strict';

console.log('Add Board.controller');

app.controller("addBoard", function ($scope, $location, UserBoards, authFactory) {
    
        $scope.title = "New Board";
        $scope.submitButtonText = "Add New Board";
        let user = authFactory.getCurrentUser();
    
        $scope.board = {
            title: "",
            description: "",
            image: "",
            uid: user
        };
    
        $scope.submitBoard = function () {
            UserBoards.addNewBoard($scope.board)
                .then((data) => {
                    $location.url("/");
                });
        };
 });
