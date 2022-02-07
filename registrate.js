/* Guarda los valores en localStorage
* @method SignUp
* @param formData
* @return devuelve los valores por consola
*/

const signUp = e => {
    let formData= {
        usuario: document.getElementById('usuario').value,
        email: document.getElementById('email').value,
        genero: document.getElementById('genero').value
    }
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(localStorage.getItem('formData'));
    e.preventDefault();
    window.location.replace("Jugar.html");
}

/* Guarda los valores en localStorage
* @method caragarPuntaje
*/
function cargarPuntaje(){
    let tiempoActual = localStorage.getItem("tiempoActual");
    let nombreJugadorActual = localStorage.getItem("formData");
    nombreJugadorActual = JSON.parse(nombreJugadorActual);
    document.getElementById("nombreJug").innerHTML = nombreJugadorActual;
    document.getElementById("jugTiempoAct").innerHTML = tiempoActual;
}