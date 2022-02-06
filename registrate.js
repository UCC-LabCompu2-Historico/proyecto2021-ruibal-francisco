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
