'use strict';

// console.log('USER BOARDS');

app.factory("UserBoards", function ($q, $http, FBCreds) {

    const getAllPins = function (user) {
        let pins = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/pins.json`)
            // ${FBCreds.databaseURL}/items.json?orderBy="uid"&equalTo="${user}"
                .then((pinObject) => {
                    let pinCollection = pinObject.data;
                    // console.log("pinCollection", pinCollection);
                    Object.keys(pinCollection).forEach((key) => {
                        pinCollection[key].id = key;
                        pins.push(pinCollection[key]);
                    });
                    resolve(pins);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const getAllBoards = function (user) {
        let boards = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/board.json`)
            // ${FBCreds.databaseURL}/items.json?orderBy="uid"&equalTo="${user}"
                .then((boardObject) => {
                    let boardCollection = boardObject.data;
                    // console.log("boardCollection", boardCollection);
                    Object.keys(boardCollection).forEach((key) => {
                        boardCollection[key].id = key;
                        // console.log("KEY", key);
                        boards.push(boardCollection[key]);
                    });
                    resolve(boards);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const addNewPin = function (obj) {
        let newObj = JSON.stringify(obj);
        return $http.post(`${FBCreds.databaseURL}/pins.json`, newObj)
            .then((data) => {
                console.log("data", data);
                return data;
            }, (error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log("error", errorCode, errorMessage);
            });
    };

    const addNewBoard = function (obj) {
        let newObj = JSON.stringify(obj);
        return $http.post(`${FBCreds.databaseURL}/board.json`, newObj)
            .then((data) => {
                console.log("data", data);
                return data;
            }, (error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log("error", errorCode, errorMessage);
            });
    };


    // removeFromFB: function(id) {
    //     fire.getAllPins()
    //     .then((data) => {
    //       let keys = Object.keys(data);
    //       let correctUgly;
    //       $(keys).each((index, item) => {
    //         let eachPin = data[item];
    //         if (eachPin.movieID === id) {
    //           correctUgly = keys[index];
    //         }
    //       });
    //       fdr.ref(`/${correctUgly}`).remove();
    //     });
    //   };



function addBoard(){

}

function addPin(){

}

function deletePin(){

}

function deleteBoard(){

}

// function getAllPins(){

// }

// function getAllBoards(){

// }

function singleBoard(){

}

function singlePin(){
    
}
return{getAllPins, getAllBoards, addNewPin, addNewBoard};
});