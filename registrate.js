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
}

/* Guarda los valores en localStorage
* @method caragarPuntaje
*/
function cargarPuntaje(){
    let tiempoActual = localStorage.getItem("tiempoActual");
    let nombreJugadorActual = localStorage.getItem("NombreDelUsuario");
    document.getElementById("nombreJug").innerHTML = nombreJugadorActual;
    document.getElementById("jugTiempoAct").innerHTML = tiempoActual;
}