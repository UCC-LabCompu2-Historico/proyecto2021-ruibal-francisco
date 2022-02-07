//Documentar todas las funciones

//Crea variables para dibujar
var canvas;
var ctx;

//Crea variable para el juego
var gameLoop;
var player;
var borders = [];

//Crea variables input
var upKey;
var rightKey;
var downKey;
var leftKey;
var start = Date.now();
localStorage.setItem("startTime", start);

/* Crea jugador y bordes
* @method function
*/

// Corre una vez la página carge
window.onload = function(){
//Asignamos canvas y context las variables
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");

    //Key Listeners
    setupInputs();

    //Crear jugador
    player= new Player(300, 200);

    for (let i = 0; i < 6; i++){
        borders.push(new Border(0 + 100* i, 620, 100, 100,1));
    }
    borders.push(new Border (0, 520, 100, 100, 2));
    for (let i = 0; i < 3; i++){
        borders.push(new Border(600, 420 + 100 * i, 100, 100, 2))
    }
    borders.push(new Border(1100,200,20,20,3));

    //Empezar el loop del juego
    gameLoop = setInterval(step, 1000/60);

    //Dibujar en el Canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,1280,720);
}

function step(){
    //Step player
    player.step();

    //Dibujar
    draw();
}

/* Vacia el canvas dibuja el jugador y el borde
* @method draw
*/
function draw(){
    //Vaciar el canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,1280,720);

    //Dibujar el jugador
    player.draw();

    //Dibujamos al borde
    for (let i = 0; i < borders.length; i++){
        borders[i].draw();
    }
}
/* Crea los event listeners
* @method SetupInputs
*/
function setupInputs() {
    document.addEventListener("keydown", function (event){
        if (event.key === "w" || event.key === "ArrowUp"){
          upKey = true;
        } else if (event.key === "a" || event.key === "ArrowLeft"){
            leftKey = true;
        } else if (event.key === "s" || event.key === "ArrowDown"){
            downKey = true;
        } else if (event.key === "d" || event.key === "ArrowRight"){
            rightKey = true;
        }
    });
    document.addEventListener("keyup", function (event){
        if (event.key === "w" || event.key === "ArrowUp"){
            upKey = false;
        } else if (event.key === "a" || event.key === "ArrowLeft"){
            leftKey = false;
        } else if (event.key === "s" || event.key === "ArrowDown"){
            downKey = false;
        } else if (event.key === "d" || event.key === "ArrowRight"){
            rightKey = false;
        }
    });
}
/* Verifica si hay intersecciones
* @method checkIntersection
*/
function checkIntersection(r1, r2){
    if (r1.x >= r2.x + r2.width) {
        return false;
    } else if (r1.x + r1.width <= r2.x){
        return false;
    } else if (r1.y >= r2.y + r2.height){
        return false;
    } else if (r1.y +r1.height <= r2.y){
        return false;
    } else {
        return true;
    }
}

