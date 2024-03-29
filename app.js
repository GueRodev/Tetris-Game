const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 10;

const board = []

const bgm = document.createElement('audio');
const breaksound = document.createElement('audio');
const drop = document.createElement('audio');
let rotatedShape;

//code audios here


for (let row = 0; row < BOARD_HEIGHT; row++){
    board[row]=[]
    for(let col = 0; col < BOARD_WIDTH; col++){
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
            [0,2,0],
            [2,2,2]
        ],
        color: '#7925dd',
    },
    {
        shape:[
            [0,3,3],
            [3,3,0],
        ],
        color : '#ffa420'
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
// 2 ways to write this code //
    {
        shape:[
            [0,0,6],
            [6,6,6]
        ],
        color:'#ff6400'
    },
    // 2 ways to write this code //
    {
        shape:[[7,7,7,7]],
        color:'#00b5ff'
    },
];

function randomTetromino(){
    const index = Math.floor(Math.random() * tetrominoes.length);

    const tetromino = tetrominoes[index];
    return {
        shape: tetromino.shape,
        color: tetromino.color,
        row: 0,
        col: Math.floor(Math.random() * (BOARD_WIDTH - tetromino.shape[0].length + 1))
    };
}

let currentTetromino = randomTetromino();
let currentGhostTetromino;

//Draw complete //
function drawTetromino(){
    const shape = currentTetromino.shape;
    const color = currentTetromino.color;
    const row = currentTetromino.row;
    const col = currentTetromino.col;

    for(let r = 0; r < shape.length; r++){
        for( let c = 0; c < shape[r].length; c++){
            if(shape[r][c]){
                const block = document.createElement('div')

                block.classList.add('block');
                block.style.backgroundColor = color;
                block.style.top = (row + r) * 24 + 'px';
                block.style.left = (col + c) * 24 + 'px';
                block.setAttribute('id',`block-${row + r}-${col + c}`);
                document.getElementById("game_board").appendChild(block);
            }
        }
    }
}

function eraseTetromino(){
    for(let i = 0; i < currentTetromino.shape.length; i++){
        for(let j = 0; j < currentTetromino.shape[i].length; j++){
            if(currentTetromino.shape[i][j] !==0){
                let row = currentTetromino.row + i;
                let col = currentTetromino.col + j;
                let block = document.getElementById(`block-${row}-${col}`);

                if(block){
                    document.getElementById('game_board').removeChild(block);
                }
            }
        }
    }
}

function moveTetromino(direction){
    let row = currentTetromino.row;
    let col = currentTetromino.col;

    if(direction === 'left'){
        eraseTetromino();
        col-=1;
        currentTetromino.col = col;
        currentTetromino.row = row;
        drawTetromino();
    } else if (direction === 'right'){
        eraseTetromino();
        col+=1;
        currentTetromino.col = col;
        currentTetromino.row = row;
        drawTetromino();
    } else {
        //down
            eraseTetromino();
            row++;
            currentTetromino.col = col;
            currentTetromino.row = row;
            drawTetromino();
    }
}

drawTetromino();
setInterval( moveTetromino('down'), 500);


