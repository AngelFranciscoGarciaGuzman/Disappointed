// emuladores.model.js

// Array para almacenar los emuladores de Nintendo
const emuladores = [
    {
        nombre: "NES",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/NES-Console-Set.png/220px-NES-Console-Set.png",
    },
    {
        nombre: "SNES",
        imagen: "URL_dhttps://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SNES-Mod1-Console-Set.png/250px-SNES-Mod1-Console-Set.png",
    },
    // ...otros emuladores de Nintendo
];

// Clase Emulador para representar los emuladores
module.exports = class Emulador {

    // Constructor de la clase. Define las propiedades del modelo.
    constructor(mi_nombre, mi_imagen) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
    }

    // Método para guardar de manera persistente el nuevo objeto (emulador).
    save() {
        emuladores.push({
            nombre: this.nombre,
            imagen: this.imagen,
        });
    }

    // Método para devolver los objetos del almacenamiento persistente (todos los emuladores).
    static fetchAll() {
        return emuladores;
    }
}
