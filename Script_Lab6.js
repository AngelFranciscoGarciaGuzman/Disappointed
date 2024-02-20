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



const passwordInput = document.getElementById('passwordChecker');
const message = document.querySelector('.message');

passwordInput.addEventListener('input', validatePassword);

function validatePassword() {
    const password = passwordInput.value;

    // Verificar si la contraseña cumple con los criterios
    const isStrong = checkStrength(password);

    if (isStrong) {
        message.textContent = 'Contraseña fuerte';
        message.style.color = 'green';
    } else {
        message.textContent = 'La contraseña debe contener al menos 8 caracteres, incluyendo letras mayúsculas, minúsculas, números y caracteres especiales.';
        message.style.color = 'red';
    }
}

function checkStrength(password) {
    // Verificar longitud mínima
    if (password.length < 8) {
        return false;
    }

    // Verificar caracteres especiales
    const specialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~]/;
    if (!specialChars.test(password)) {
        return false;
    }

    // Verificar letras mayúsculas y minúsculas
    const uppercaseChars = /[A-Z]/;
    const lowercaseChars = /[a-z]/;
    if (!uppercaseChars.test(password) || !lowercaseChars.test(password)) {
        return false;
    }

    // Verificar números
    const numberChars = /[0-9]/;
    if (!numberChars.test(password)) {
        return false;
    }

    return true;
}
