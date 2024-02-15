console.log ("hola");

console.info ("Mensaje de informacion");

console.warn ("Mensaje de advertencia");

console.error ("Mensaje de error");

//variables, constantes

var juego = "minecraft";

const precio = 50;


//Forma moderna de variable

let cant = 1

alert('Proyecto en proceso');

const nombre = prompt ("Nombre");

console.log("Mucho gusto: ", nombre);

const hombre = confirm('Eres hombre?');

if(hombre){
    console.log("Okey");
}

else{
    console.log("Okey tambn");
}

//Funcion clasica

function construir() {
    console.log("construyendo ksa");
}

construir();

//Funcion moderna

const pipe = () => {
    console.log("Im making pipe bombs");
};

const desayuno = (comida) => {
    console.log("El desayuno es: ", comida);
}

desayuno("huevitos");


const arreglo = ["Elemento"];

const arreglo2 = new Array();

arreglo.push("Otro elemento");

arreglo.push(5);

arreglo[10] = "uno mas";

console.log(arreglo);

arreglo["dos"] = 8;

console.log(arreglo);

for(let posicion in arreglo) {
    console.log(posicion);
}

const objeto = {atributo: "valor", atributo2: "hola"};
console.log(objeto);

for(let atributo in objeto){
    console.log(atributo);
}