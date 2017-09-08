'use strict';

// console.log('Add Pins.controller');

app.controller("addPin", function($scope, $location, $routeParams, UserBoards, authFactory, $route) {

    $scope.title = "New Rivet";
    $scope.submitButtonText = "Add";

    let user = authFactory.getCurrentUser();

    $scope.pin = {
        title: "",
        uid: user,
        img: "",
        description: "",
        tags: "",
        url: "",
        boardid: $routeParams.itemId
    };

    $scope.submitPin = function() {
        console.log("WHYYY");
        UserBoards.addNewPin($scope.pin)
            .then((data) => {
                $location.url("#!/board/{{item.id}}");
                $route.reload();
            });
    };
});