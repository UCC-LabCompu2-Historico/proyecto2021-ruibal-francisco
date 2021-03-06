/* Rellena los bordes del canvas
* @method Border
* @param x -
* @param y -
* @param width -
* @param heigth -
* @param type -
*/


function Border (x, y, width, height, type){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;

    this.draw = function() {
        if (this.type === 1){
            ctx.fillStyle = "blue";
        } else if (this.type === 2){
            ctx.fillStyle = "red";
        } else if (this.type === 3){
            ctx.fillStyle = "gold";
        }
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}