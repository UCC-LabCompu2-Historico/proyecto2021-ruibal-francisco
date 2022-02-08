/*Función encargada del movimiento del jugador
*@method Player
*@x - posición x del jugador
*@y - posición y del jugador
*/

function Player(x,y) {
    //variables del jugador
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed = 0;
    this.friction = 0.6; //Mientras más alta la fricción mas tiempo dura en frenarse
    this.maxSpeed = 10;
    this.active = true;
    this.width = 50;
    this.height = 100;
    this.start;
    this.end = null;
    this.totalTime;
    /*    //cronómetro
        while(this.x < 1095 && this.x > 1125 && this.y < 200 && this.y > 220){
            var timer = 0;
            timer = timer + 1;
        }

        //alerta
        if (this.x > 1080 && this.x < 240 && this.y > 180 && this.y < 220){
            alert("Felicitaciones ha terminado el juego");
        }
    */

    this.step = function () {
        //Movimiento
        if (this.active) {
            //Movimiento Horizontal
            if (!leftKey && !rightKey || leftKey && rightKey) {
                //Baja la velocidad
                this.xspeed *= this.friction;
            } else if (rightKey) {
                //Mover a la derecha
                this.xspeed++;
            } else if (leftKey) {
                //Mover a la izquierda
                this.xspeed--;
            }
            //Movimiento Vertical
            if (upKey) {
                //Nos fijamos si esta en el piso

                this.yspeed -= 15;
            }
            //Aplicamos la gravedad
            this.yspeed += 5;

            //Correjimos la Velocidad
            if (this.xspeed > this.maxSpeed) {
                this.xspeed = this.maxSpeed;
            } else if (this.xspeed < -this.maxSpeed) {
                this.xspeed = -this.maxSpeed;
            }
            if (this.yspeed > this.maxSpeed) {
                this.yspeed = this.maxSpeed;
            } else if (this.yspeed < -this.maxSpeed) {
                this.yspeed = -this.maxSpeed;
            }
            if (this.xspeed > 0) {
                this.xspeed = Math.floor(this.xspeed);
            } else {
                this.xspeed = Math.ceil(this.xspeed);
            }
            if (this.yspeed > 0) {
                this.yspeed = Math.floor(this.yspeed);
            } else {
                this.yspeed = Math.ceil(this.yspeed);
            }

            //Colision horizontal
            let horizontalRect = {
                x: this.x + this.xspeed,
                y: this.y,
                width: this.width,
                height: this.height,
            }
            //Colision vertical
            let verticalRect = {
                x: this.x,
                y: this.y + this.yspeed,
                width: this.width,
                height: this.height
            }

            //Nos fijamos si hay intersecciones
            for (let i = 0; i < borders.length; i++) {
                let borderRect = {
                    x: borders[i].x,
                    y: borders[i].y,
                    width: borders[i].width,
                    height: borders[i].height
                }
                if (checkIntersection(horizontalRect, borderRect)) {
                    while (checkIntersection(horizontalRect, borderRect)) {
                        horizontalRect.x -= Math.sign(this.xspeed);
                    }
                    this.x = horizontalRect.x;
                    this.xspeed = 0;
                }
                if (checkIntersection(verticalRect, borderRect)) {
                    while (checkIntersection(verticalRect, borderRect)) {
                        verticalRect.y -= Math.sign(this.yspeed);
                    }
                    this.y = verticalRect.y;
                    this.yspeed = 0;
                }
            }

            this.x += this.xspeed;
            this.y += this.yspeed;
        }
    }

    this.draw = function () {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);

        if (this.x > 1080 && this.x < 1240 && this.y > 180 && this.y < 220) {
            this.end = Date.now();
            this.start = localStorage.getItem("startTime");
            this.totalTime = this.end - this.start;
            localStorage.setItem("tiempoActual", this.totalTime / 1000);
        }
        if (this.end != null){
            alert("Felicitaciones ha terminado el juego. Tu tiempo fue: " + this.totalTime / 1000 + " seg");
            window.location.replace("MejoresTiempos.html");
        }
    }
}