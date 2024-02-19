const boton = document.getElementById("boton_construir");

console.log(boton);




const construir_casa = () => {
    const imagen = document.getElementById("imagen_construir");

    imagen.src="https://static.wikia.nocookie.net/spongefan/images/7/77/Dabob.jpg/revision/latest/scale-to-width-down/382?cb=20210815035347"


    boton.innerHTML = "Terminar casa";
    boton.className="button is-success"
    boton.onclick = terminar_casa;

};

const terminar_casa = () => {
    const imagen = document.getElementById("imagen_construir");

    imagen.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZyTDvZAf8UPZmGE5t9TkieM2wOrO8C7OpWHi2Uoxk4Q&s"


    boton.innerHTML = "Destruir casa";
    boton.className="button is-warning"
    boton.onclick = destruir_casa;

};

const destruir_casa = () => {
    const imagen = document.getElementById("imagen_construir");

    imagen.src="https://i.imgur.com/79TgQz9.jpg"
    boton.innerHTML = "Construir casa";
    boton.inner
    
    
    boton.onclick = construir_casa;

};

destruir_casa();
boton.onclick = construir_casa;

//Verificar contraseñas

const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const message = document.getElementById('message');

function validatePassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
        message.textContent = 'Las contraseñas coinciden';
        message.className = 'valid';

    } else {
        message.textContent = 'Las contraseñas no coinciden';
        message.className = 'invalid';
    }
}

passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validatePassword);