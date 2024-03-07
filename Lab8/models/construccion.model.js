const construcciones = [
    {
        nombre: "casa", 
        imagen: "https://media1.tenor.com/m/Yn8OFus9tikAAAAd/boomshakalaka.gif",
    }
];

module.exports = class Construccion {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_imagen) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        construcciones.push({
            nombre: this.nombre,
            imagen: this.imagen,
        }); //es lo mismo que construcciones.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return construcciones;
    }

}