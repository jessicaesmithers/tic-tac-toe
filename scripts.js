//use element.dataset.box to access box number

//factory functions for players
const Player = function(marker){
    const placePiece = function(){
        if(!GameBoard.winnerFound){
        //only do this stuff if the spot is empty; otherwise do nothing
            if(GameBoard.boardArr[this.dataset.box] == ""){
                GameBoard.boardArr[this.dataset.box] = GameBoard.currentPlayer.marker;
            
                updateBoard();
                checkForWin();
                // setTimeout(function(){
                //     checkForWin();
                // }, 500)
                if(GameBoard.currentPlayer == playerX){
                    GameBoard.currentPlayer = playerO;
                } else {
                    GameBoard.currentPlayer = playerX;
                }
                let currentTurnMarker = document.querySelector(".currentTurnMarker");
                currentTurnMarker.innerText = GameBoard.currentPlayer.marker;
            }
        }
    }

    return {marker, placePiece};
};

//creates each player
let playerX = Player("X");
let playerO = Player("O");



//module for global variables
let GameBoard = (function(){
    const box0 = document.querySelector(".box-0");
    const box1 = document.querySelector(".box-1");
    const box2 = document.querySelector(".box-2");
    const box3 = document.querySelector(".box-3");
    const box4 = document.querySelector(".box-4");
    const box5 = document.querySelector(".box-5");
    const box6 = document.querySelector(".box-6");
    const box7 = document.querySelector(".box-7");
    const box8 = document.querySelector(".box-8");
    const board = [box0, box1, box2, box3, box4, box5, box6, box7, box8];
    let boardArr = ["", "", "", "", "", "", "", "", ""]
    let currentPlayer = playerX;
    let winnerFound = false;
    for(let i of board){
        i.addEventListener("click", currentPlayer.placePiece);
    }
    return {board, currentPlayer, boardArr, winnerFound};
})();



function updateBoard(){
    for(let i = 0; i < 9; i++){
        GameBoard.board[i].innerText = GameBoard.boardArr[i];
    }  
}

function playGame(){
    
    
   
}



//helper functions
function newGame(){
    const winnerAlert = document.querySelector(".winnerAlert");
    for(let i = 0; i < 9; i++){
        GameBoard.boardArr[i] = "";
    }
    updateBoard();
    winnerAlert.style.display = "none";
    GameBoard.winnerFound = false;
}

function checkForWin(){
    let winnerFound = false;
    let boxes = GameBoard.boardArr;
    let winnerMarker = document.querySelector(".winnerMarker");
    let winnerAlert = document.querySelector(".winnerAlert");
    if(boxes[0].length == 1 && boxes[0] == boxes[1] && boxes[0] == boxes[2]){
        GameBoard.winnerFound = true;
    }
    if(boxes[3].length == 1 && boxes[3] == boxes[4] && boxes[3] == boxes[5]){
        GameBoard.winnerFound = true;
    }
    if(boxes[6].length == 1 && boxes[6] == boxes[7] && boxes[6] == boxes[8]){
        GameBoard.winnerFound = true; 
    } 
    if(boxes[0].length == 1 && boxes[0] == boxes[3] && boxes[0] == boxes[6]){
        GameBoard.winnerFound = true;
    }
    if(boxes[1].length == 1 && boxes[1] == boxes[4] && boxes[1] == boxes[7]){
        GameBoard.winnerFound = true;
    }
    if(boxes[2].length == 1 && boxes[2] == boxes[5] && boxes[2] == boxes[8]){
        GameBoard.winnerFound = true;
    }
    if(boxes[0].length == 1 && boxes[0] == boxes[4] && boxes[0] == boxes[8]){
        GameBoard.winnerFound = true;
    }
    if(boxes[2].length == 1 && boxes[2] == boxes[4] && boxes[2] == boxes[6]){
        GameBoard.winnerFound = true;
    }
    if(GameBoard.winnerFound){
        winnerMarker.innerText = GameBoard.currentPlayer.marker;
        winnerAlert.style.display = "block";
    }
}