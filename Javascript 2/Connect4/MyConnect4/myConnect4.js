let board = [];
let player1 = `<span class="player1"></span>`;
let player2 = `<span class="player2"></span>`;
let currentPlayer = player1;

function createBoard(){
    board = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
    ];

    let table = `<table>`;

    table += `<thead><tr>`;
    for(let col = 0; col < board[0].length; col++){
        table += `<td><button class="chooseColumnBtn" data-col="` + col + `">&darr;</button></td>`;
    }
    table += `</tr></thead>`;

    table += `<tbody>`;
    for(let row=0; col < board.length; row++){
        table += `<tr>`;
        for(let col = 0; col < board[row].length; col++){
            table += `<td><span class="space"></span></td>`;
        }
        table += `</tbody>`;
    }
    table += `</tbody>`;

    table += `</table>`;

    $(`#board`).html(table);
    $(`.chooseColumnBtn`).on('click', dropAPiece);
}

function dropAPiece(e){

}