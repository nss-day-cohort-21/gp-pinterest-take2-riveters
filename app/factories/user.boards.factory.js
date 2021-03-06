'use strict';

// console.log('USER BOARDS');

app.factory("UserBoards", function($q, $http, FBCreds, authFactory) {

    const getAllPins = function(user) {
        let pins = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/pins.json?orderBy="uid"&equalTo="${user}"`)
                .then((pinObject) => {
                    let pinCollection = pinObject.data;
                    console.log("pinCollection", pinCollection);
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

    const getAllBoards = function(user) {
        let boards = [];
        console.log(user);
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/board.json?orderBy="uid"&equalTo="${user}"`)
                .then((boardObject) => {
                    let boardCollection = boardObject.data;
                    console.log("boardCollection", boardCollection);
                    Object.keys(boardCollection).forEach((key) => {
                        boardCollection[key].id = key;
                        boards.push(boardCollection[key]);
                    });
                    resolve(boards);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const addNewPin = function(obj) {
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

    const addNewBoard = function(obj) {
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


    const getBoardPins = function (boardId) {

        let boardedPins = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/pins.json?orderBy="boardid"&equalTo="${boardId}"`)
                .then((boardPins) => {
                    let boardPinCollection = boardPins.data;
                    let pinKeys = Object.keys(boardPinCollection);
                    console.log("PIN KEYS", pinKeys);
                    console.log("boardPinCollection", boardPinCollection);
                    Object.keys(boardPinCollection).forEach((key) => {
                        boardPinCollection[key].id = key;
                        boardedPins.push(boardPinCollection[key]);
                    });
                    console.log("boardedPins", boardedPins);
                    resolve(boardedPins);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const getBoardName = function(boardId) {
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/board/${boardId}.json`)
                .then((boardInfo) => {
                    let boardInfoCollection = boardInfo.data;
                    console.log("boardPinCollection", boardInfoCollection);
                    let singleBoardName = boardInfoCollection.title;
                    console.log("singleBoardName", singleBoardName);
                    resolve(singleBoardName);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const deleteBoard = function(boardId) {
        return $q((resolve, reject) => {
            $http.delete(`${FBCreds.databaseURL}/board/${boardId}.json`)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    /////////////////////////
    //Get all pin objects:
    /////////////////////////
    let getAllUsersPins = () => {
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/pins.json?`).then((itemObject) => {
                    let itemCollection = itemObject.data;
                    console.log("all users pins", itemCollection);
                    resolve(itemCollection);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };


    return { getAllPins, getAllBoards, addNewPin, addNewBoard, getBoardPins, getBoardName, deleteBoard, getAllUsersPins };
});