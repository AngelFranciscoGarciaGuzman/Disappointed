console.info ("Mensaje de informacion");

console.warn ("Mensaje de advertencia");

console.error ("Mensaje de error");

//variables, constantes

var juego = "minecraft";


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
  let negativos = 0;
  let ceros = 0;
  let mayoresACero = 0;
  
  arr.forEach(numero => {
      if (numero < 0) {
          negativos++;
      } else if (numero === 0) {
          ceros++;
      } else {
          mayoresACero++;
      }
  });

  console.log("Cantidad de números negativos:", negativos);
  console.log("Cantidad de ceros:", ceros);
  console.log("Cantidad de valores mayores a 0:", mayoresACero);
}

// Ejemplo de uso:
const array = [1, -2, 0, 5, -3, 0, 8];
contador(array);

//4

function promedios(matriz) {
  let promediosArr = [];
  
  matriz.forEach(arreglo => {
      let suma = arreglo.reduce((acumulador, numero) => acumulador + numero, 0);
      let promedio = suma / arreglo.length;
      promediosArr.push(promedio);
  });

  return promediosArr;
}

// Ejemplo de uso:
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const resultados = promedios(matriz);
console.log("Promedios de cada renglón:", resultados);

//5

function inverso(numero) {
  // Convertir el número a cadena y luego a arreglo para manipular sus dígitos
  const digitos = Array.from(numero.toString());

  // Invertir el arreglo de dígitos y unirlos nuevamente en una cadena
  const numeroInverso = parseInt(digitos.reverse().join(''));

  return numeroInverso;
}

// Ejemplo de uso:
const num = 12345;
const numInverso = inverso(num);
console.log("Número original:", num);
console.log("Número con dígitos en orden inverso:", numInverso);

//6
// Definición del objeto Rectangulo
function Rectangulo(ancho, altura) {
  this.ancho = ancho;
  this.altura = altura;
  
  // Método para calcular el área del rectángulo
  this.calcularArea = function() {
    return this.ancho * this.altura;
  };
  
  // Método para calcular el perímetro del rectángulo
  this.calcularPerimetro = function() {
    return 2 * (this.ancho + this.altura);
  };
}

// Crear un nuevo objeto Rectangulo con valores iniciales de ancho y altura
const rectangulo = new Rectangulo(10, 50);

// Calcular y mostrar el área del rectángulo
const area = rectangulo.calcularArea();
console.log("Área del rectángulo:", area);

// Calcular y mostrar el perímetro del rectángulo
const perimetro = rectangulo.calcularPerimetro();
console.log("Perímetro del rectángulo:", perimetro);

// Define la función mostrarAreaRectangulo
function mostrarAreaRectangulo() {
  // Calcula el área del rectángulo utilizando el método calcularArea
  const area = rectangulo.calcularArea();

  // Muestra el área del rectángulo en la consola
  console.log("Área del rectángulo:", area);
}