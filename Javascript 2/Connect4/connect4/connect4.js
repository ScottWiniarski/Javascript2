let board = [];
let player1 = '<span class="player1"></span>';
let player2 = '<span class="player2"></span>';
let currentPlayer = player1;

function createBoard(){
   // setup a new board
    board = [
        [0,0,0,0,0,0,0],// 0
        [0,0,0,0,0,0,0],// 1
        [0,0,0,0,0,0,0],// 2
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
    ];
    // board[row][col]
    // board[2][1]

    let table = '<table>';

    // create buttons
    table += '<thead><tr>';
    for(let col = 0; col < board[0].length; col++){
        table += '<td><button class="dropBtn" data-col="' + col + '">&darr;</button></td>';
    }
    table += '</tr></thead>';

    table += '<tbody>';
    for(let row = 0; row < board.length; row++){
        table += '<tr>';
        for(let col = 0; col < board[row].length; col++){
            table += '<td><span class="space"></span></td>';
        }
        table += '</tr>';
    }
    table += '</tbody>';


    table += '</table>';

    // output table
    $('#board').html(table);

    // all buttons call the same function
    $('.dropBtn').on('click', dropPiece);
}

// class A{
//     method(){
//         this.blah
//     }
// }
// let a = new A();
// a.method()

function dropPiece(e){
    // console.log('e', e);
    // console.log('this', this);
    // 'this' refers to the object that called the function
    //let col = $(this).attr('id');
    //let col = $(this).attr('data-col');
    let col = $(this).data('col');

    // start the loop at the bottom
    for(let row = board.length - 1; row >= 0; row--){
        // check if spot is open
        if(board[row][col] === 0){
            // put the piece in the array
            board[row][col] = currentPlayer;

            // update the board in the DOM
            $('#board table tbody tr:eq(' + row + ') td:eq(' + col + ') .space').html(currentPlayer);

            // see if this was the last row
            if(row === 0){
                $(this).attr('disabled', 'disabled');
            }

            check4Win()

            switchPlayer();

            // stop the loop
            break;
        }
    }
}

function check4Win(){
    // horizontal win
    for(let row = board.length - 1; row >= 0; row--){
        for(let col = 0; col < board[row].length - 3; col++){
            if(board[row][col] === currentPlayer &&
                board[row][col+1] === currentPlayer &&
                board[row][col+2] === currentPlayer &&
                board[row][col+3] === currentPlayer
            ){
                outputWinner()
                return; // exit the whole function
            }
        }
    }

    // vertical win
    for(let row = board.length - 1; row >= 3; row--){
        for(let col = 0; col < board[row].length; col++){
            if(board[row][col] === currentPlayer &&
                board[row-1][col] === currentPlayer &&
                board[row-2][col] === currentPlayer &&
                board[row-3][col] === currentPlayer
            ){
                outputWinner()
                return; // exit the whole function
            }
        }
    }
    // upward diagonal win
    for(let row = board.length - 1; row >= 3; row--){
        for(let col = 0; col < board[row].length - 3; col++){
            if(board[row][col] === currentPlayer &&
                board[row-1][col+1] === currentPlayer &&
                board[row-2][col+2] === currentPlayer &&
                board[row-3][col+3] === currentPlayer
            ){
                outputWinner()
                return; // exit the whole function
            }
        }
    }

    // downward diagonal win
    for(let row = board.length - 4; row >= 0; row--){
        for(let col = 0; col < board[row].length - 3; col++){
            if(board[row][col] === currentPlayer &&
                board[row+1][col+1] === currentPlayer &&
                board[row+2][col+2] === currentPlayer &&
                board[row+3][col+3] === currentPlayer
            ){
                outputWinner()
                return; // exit the whole function
            }
        }
    }
}

function switchPlayer(){
    // ternary statement
    // result  =   (condition ) ? (value if true) : (value if false)
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    $('#currentPlayer').html(currentPlayer);
    //document.getElementById('currentPlayer').innerHTML = currentPlayer;
}

function outputWinner(){
    $('#winner').html(currentPlayer + ' wins!');
    $('.dropBtn').attr('disabled', 'disabled');
}

const newGame = function(){
    createBoard();
    // clear winner
    $('#winner').html('');
};

//$(function(){
// wait until the page is loaded
$(document).ready(function(){
    newGame();

    //add any event handlers
    // $('#newGame').click(function(){
    //
    // })

    $('#newGame').on('click', function(){
        newGame();
    });

    //$('#newGame').on('click', newGame());// wrong
    //$('#newGame').on('click', newGame);
});