
function reset(){
    snake = [];
    direction = "";
    snake[0] = {
        x: 8 * box,
        y: 8 * box
    };
    criarCobrinha();
}