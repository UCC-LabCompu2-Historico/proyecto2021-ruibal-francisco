/*estas dos funciones se encargan de cambiar el video de la pagina principal y cambiar el gif del caballero*/

function vid1() {
    /*document.getElementById('myVideo').src = 'imagenes/forest_rain.mp4';*/
    document.getElementById('myvideo2').style.zIndex = '2';
    /*document.getElementById('knight').src = 'gif/KingKnight.gif';*/
    /*var espada1= document.getElementById("swing");
    function play() {
        espada1.load();
        espada1.play();
    }*/
    //document.getElementById('knight').style.zIndex= '3';
    //document.getElementById('knight2').style.zIndex= '0';
    document.getElementById('knight2').style.top= '88%';
    document.getElementById('knight2').src= 'gif/KingKnight.gif';
}

function vid0(){
    /*document.getElementById('myVideo').src = 'imagenes/forest.mp4';*/
    document.getElementById('myvideo2').style.zIndex = '0';
    /*document.getElementById('knight').src = 'gif/KingKnight2.gif';*/
    //document.getElementById('knight').style.zIndex= '0';
    //document.getElementById('knight2').style.zIndex= '3';
    document.getElementById('knight2').style.top= '91.5%';
    document.getElementById('knight2').src= 'gif/KingKnight2.gif';
}



