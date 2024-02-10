const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 10;

const board = []

const bgm = document.createElement('audio');
const breaksound = document.createElement('audio');
const drop = document.createElement('audio');
let rotatedShape;

//GET AUDIOS//
bgm.setAttribute("src", "./assets/bgm.mp3");
breaksound.setAttribute("src", "./assets/break.mp3");
breaksound.setAttribute("src", "./assets/drop.mp3");

for (let row =0; row < BOARD_HEIGHT; row++){
    board[row]=[]
    for(let col =0; col < BOARD_WIDTH; col++){
        board[row][col] = 0
    }
}

const tetrominoes = [
    {
        shape : [
            [1,1],
            [1,1]
        ],
        color: '#ffd800'
    },
    {
        shape:[
            [0,2,0]
            [2,2,2]
        ],
        color: '#7925dd',
    },
    {
        shape:[
            [0,3,3],
            [3,3,0],
        ],
        color : '#ff8000'
    },
    {
        shape:[
            [4,4,0],
            [0,4,4]
        ],
        color : '#ff0000'
    },
    {
        shape:[
            [5,0,0],
            [5,5,5]
        ],
        color:'#008f39'
    },

    {
        shape:[
            [0,0,6]
            [6,6,6]
        ],
        color:'#ff6400'
    }


]




