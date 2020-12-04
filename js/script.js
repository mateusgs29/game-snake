let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
// Posição da cabeça da cobra
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "";
// Posição da comida
let comida = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

let pontos = document.querySelector('#ponto');
let qtd_pontos = 0;
//funcao para criar o background
function criarBG(){
    context.fillStyle = "rgb(27, 27, 27)"; //definir estilo
    //fillRect vai desenhar o retangulo
    context.fillRect(0, 0, 16 * box, 16 * box); 
}

//funcao para criar a cobra
function criarCobrinha(){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "greenyellow";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function criarComida(){
    context.fillStyle = "red";
    context.fillRect(comida.x, comida.y, box, box);
}

document.addEventListener('keydown', update);

function update(event){
    // se a direção não for inversa a clicada, muda a direcao
    if(event.keyCode == 37 && direction != "right") direction = "left"; 
    if(event.keyCode == 38 && direction != "down") direction = "up"; 
    if(event.keyCode == 39 && direction != "left") direction = "right"; 
    if(event.keyCode == 40 && direction != "up") direction = "down";  
}

function iniciarJogo(){
    // caso chegue no limite do quadrado, a cobra aparece do outro lado
    if(snake[0].x > 16 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 16 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    // caso a cobra bata nela mesma
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
        }
    }

    criarBG();
    criarCobrinha();
    criarComida();

    let snake_X = snake[0].x; 
    let snake_Y = snake[0].y;
    // faz a cobra se mexer
    if(direction == "right") snake_X += box;
    if(direction == "left") snake_X -= box;
    if(direction == "up") snake_Y -= box;
    if(direction == "down") snake_Y += box;

    if(snake_X != comida.x || snake_Y != comida.y){
        snake.pop();

    }else{
        comida.x = Math.floor(Math.random() * 15 + 1) * box;
        comida.y = Math.floor(Math.random() * 15 + 1) * box;
        qtd_pontos++;
    }

    pontos.innerText = qtd_pontos;

    let newHead = {
        x: snake_X,
        y: snake_Y
    }

    // adiciona na frente
    snake.unshift(newHead);
}

function reset(){
    clearInterval(jogo);
    setIntervalo();
    snake = [];
    direction = "";
    qtd_pontos = 0;
    snake[0] = {
        x: 8 * box,
        y: 8 * box
    };
}

function setIntervalo(){
    jogo = setInterval(iniciarJogo, 120);
}

let jogo = setInterval(iniciarJogo, 120);