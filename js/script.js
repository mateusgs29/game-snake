let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

//funcao para criar o background
function criarBG(){
    context.fillStyle = "lightgreen"; //definir cor
    //fillRect vai desenhar o retangulo
    context.fillRect(0, 0, 16 * box, 16 * box); 
}

//funcao para criar a cobra
function criarCobrinha(){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snake_X = snake[0].x; 
    let snake_Y = snake[0].y;

    if(direction == "right") snake_X += box;
    if(direction == "left") snake_X -= box;
    if(direction == "up") snake_Y -= box;
    if(direction == "down") snake_Y += box;

    snake.pop();

    let newHead = {
        x: snake_X,
        y: snake_Y
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);