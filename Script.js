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


//1
var numero = prompt("Ingrese un número:");
document.write("<table border='1'>");
document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
for (var i = 1; i <= numero; i++) {
  var cuadrado = i * i;
  var cubo = i * i * i;
  document.write("<tr><td>" + i + "</td><td>" + cuadrado + "</td><td>" + cubo + "</td></tr>");
}
document.write("</table>");

//2
var start = performance.now();
var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
var suma = num1 + num2;
var respuesta = prompt("¿Cuánto es " + num1 + " + " + num2 + "?");
var end = performance.now();
var tiempo = end - start;
if (parseInt(respuesta) === suma) {
  document.write("¡Correcto! La respuesta es " + suma + ".<br>");
} else {
  document.write("Incorrecto. La respuesta correcta es " + suma + ".<br>");
}
document.write("Tiempo de respuesta: " + tiempo + " milisegundos.");

//3
function contador(arr) {
    var negativos = 0;
    var ceros = 0;
    var positivos = 0;
    
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        negativos++;
      } else if (arr[i] === 0) {
        ceros++;
      } else {
        positivos++;
      }
    }
    
    return [negativos, ceros, positivos];
  }
  
  // Prueba de la función
  console.assert(JSON.stringify(contador([-1, 0, 1, 2, -3, 0])) === JSON.stringify([2, 2, 2]), "Test 1 falló");
  console.assert(JSON.stringify(contador([0, 0, 0, 0])) === JSON.stringify([0, 4, 0]), "Test 2 falló");