console.log("Hello World");


const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'ooohhh mai gawwd');

const arreglo = [2000, 400, 60, 800, 9, 90, 50];

for (let item of arreglo){
    setTimeout(() => {
        console.log("jojo hackiado papu :v xdxdxd");
    }, item);
}

const header = 
`<header>
<h4>Bienvenido a la Página Personal de Angel Francisco Garcia Guzman: error 404</h4>
</header>`

const footer = 
`<footer>
<p>Creado con HTML5. Editor utilizado: Visual Studio Code, <a href="https://code.visualstudio.com/">sitio del editor</a>.</p>
</footer>`

const construcciones = [{nombre: "casa", imagen: "https://i.blogs.es/7cfcd0/casas-en-minecraft/1366_2000.jpeg"}];



const http = require('http');

const server = http.createServer( (request, response) =>{

    console.log(request.url);

    if(request.url == '/raizr'){

        response.setHeader('Content-Type', 'text/html');
        response.write(`
        <!DOCTYPE html>
    <html lang="es">
    
    <head>
        <!--Import Google Icon Font-->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!--Import materialize.css-->
        <link type="text/css" rel="stylesheet" href="materialize.css"  media="screen,projection"/>
    
        <!--Let browser know website is optimized for mobile-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
    
      
    
    <body>
    
    <div class="blue-grey-text text-lighten-3 container">

        <header>
            <h4>Bienvenido a la Página Personal de Angel Francisco Garcia Guzman</h4>
        </header>
    
        <main>
    
            <section>
                <h2><a href="https://www.instagram.com/angel.garcia.guzman/">Sobre Mí</a></h2>
    
                <p id="diamantes">Soy aficionado a todo tipo de juego de mesa, pero mis favoritos sin lugar a duda son el Ajedrez y Catan.</p>
            </section>
            
            <section id="preguntas">
    
                
                
                <h4 class="materialize-red-text">Preguntas</h4>
                <p>En esta sección responderé a las preguntas</p>
                
                <ul>
                    <li><strong>¿Cuál es la diferencia entre Internet y la World Wide Web?</strong></li>
                </ul>
    
                    <p>La diferencia radica en que Internet es una red de redes de computadoras interconectadas globalmente, mientras que la World Wide Web es un servicio que opera sobre Internet y permite el acceso a información a través de documentos multimedia hipertextuales.</p>
    
                <ul>
                    <li><strong>¿Cuáles son las partes de un URL?</strong></li>
                </ul>
    
                    <p>Un URL se compone de un protocolo como "https://", seguido del nombre de dominio como "www.ejemplo.com", luego una ruta como "/carpeta/archivo.html", posiblemente seguido de parámetros como "?id=123&pagina=2", y finalmente un fragmento opcional como "#seccion1".</p>
    
                <ul>
                    <li><strong>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</strong></li>
                </ul>
    
                    <p>GET: Solicita datos del servidor. HEAD: Solicita solo los encabezados de respuesta. POST: Envía datos al servidor para ser procesados. PUT: Envía datos al servidor para ser almacenados. PATCH: Aplica modificaciones parciales a un recurso existente. DELETE: Solicita al servidor que elimine un recurso específico.</p>
                <ul>
                    <li><strong>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</strong></li>
                </ul>
                    <p>El método HTTP que se debe utilizar al enviar un formulario HTML, como cuando ingresas tu usuario y contraseña en algún sitio web, es el método POST. Esto se debe a que el método POST envía los datos del formulario al servidor en el cuerpo de la solicitud HTTP, lo que permite enviar información confidencial, como contraseñas, de forma segura sin que aparezcan directamente en la URL como en el caso del método GET. Además, el método POST no tiene restricciones de longitud de URL, lo que lo hace adecuado para enviar grandes cantidades de datos como formularios.</p>
    
                <ul>
                    <li><strong>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</strong></li>
                </ul>
    
                    <p>Cuando accedes a una página a través de un URL en un navegador web, el método HTTP utilizado por defecto es el método GET. Esto se debe a que el navegador envía una solicitud GET al servidor para obtener la página web correspondiente al URL especificado. El método GET se utiliza para solicitar datos del servidor y es el método más comúnmente utilizado al navegar por páginas web.</p>
                <ul>
                    <li><strong>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</strong></li>
                </ul>
    
                    <p>Cuando un servidor web devuelve una respuesta HTTP con el código 200, significa que la solicitud fue exitosa. En el contexto de HTTP, el código de estado 200 se denomina "OK" (en inglés, "OK"). Indica que la solicitud del cliente ha sido recibida, entendida y aceptada de manera satisfactoria por el servidor, y que se ha devuelto correctamente la respuesta solicitada. No ocurrió ningún error en este caso.</p>
                <ul>
                    <li><strong>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</strong></li>
                </ul>
    
                    <p>Sí, es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que encontró un error 404 al intentar acceder a una página específica. El error 404 indica que el servidor no pudo encontrar la página solicitada. Aunque puede haber varias razones por las cuales se produce este error, como cambios en la estructura del sitio web, enlaces rotos o páginas eliminadas, es responsabilidad del desarrollador asegurarse de que el sitio web esté funcionando correctamente y que todas las páginas estén disponibles para los usuarios. Corregir este tipo de errores mejora la experiencia del usuario y ayuda a mantener la integridad y usabilidad del sitio web.</p>
                <ul>
                    <li><strong>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</strong></li>
                </ul>
                    <p>Sí, es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que encontró un error 500 al intentar acceder al sitio. El error 500, también conocido como "Internal Server Error" (Error interno del servidor), indica que ocurrió un problema en el servidor web al procesar la solicitud del cliente, pero no proporciona detalles específicos sobre la causa del problema.</p>
    
                <ul>
                    <li><strong>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</strong></li>
                </ul>
    
                    <p>Cuando un atributo HTML5 está "depreciado" o "desaprobado" (deprecated), significa que aunque todavía puede ser compatible con los navegadores web, se considera obsoleto y se recomienda evitar su uso en favor de métodos más modernos y estándares.</p>
    
                <ul>
                    <li><strong>¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</strong></li>
                </ul>
    
                    <p>HTML5 introduce elementos semánticos, soporte multimedia nativo, formularios mejorados, APIs JavaScript, adaptabilidad móvil y mejoras en accesibilidad en comparación con HTML 4.</p>
    
                <ul>
                    <li><strong>¿Qué componentes de estructura y estilo tiene una tabla?</strong></li>
                </ul>
                    <p>Una tabla en HTML consta principalmente de dos componentes: estructura y estilo.
                            
                            Estructura:
                            table: Define la tabla en sí misma.
                            tr: Define una fila dentro de la tabla.
                            td: Define una celda de datos dentro de una fila.
                            th: Define una celda de encabezado dentro de una fila (opcional).
                            caption: Define un título o descripción para la tabla (opcional).
                            Estilo:
                            
                            Los estilos CSS se aplican para controlar la apariencia de la tabla, incluyendo el tamaño de la fuente, los colores de fondo y texto, los bordes, el espaciado entre celdas, etc.
                            Los selectores de CSS pueden dirigirse específicamente a las etiquetas table, tr, td, th y caption, o se pueden utilizar clases y IDs para aplicar estilos específicos.</p>
                <ul>
                    <li><strong>¿Cuáles son los principales controles de una forma HTML5?</strong></li>
                </ul>
                    <p>Los principales controles de formulario en HTML5 incluyen input, textarea, select, button, fieldset, legend, label, entre otros.</p>
    
             <section id="preguntas Lab 3">
    
                <h4 class="light-green-text text-accent-2">Preguntas Lab 3</h4>
    
                <p>En esta sección responderé a las preguntas:</p>
    
                <ul>
                    <li><strong>Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS? </strong></li>
                </ul>
                    <p>Como ingeniero de software, mi recomendación sobre el uso de !important en CSS es tratar de evitarlo en la medida de lo posible. Aunque puede ser útil en casos específicos, como para sobrescribir estilos heredados o para hacer ajustes rápidos, su uso excesivo puede complicar el mantenimiento del código y dificultar la comprensión de la cascada de estilos.</p>
    
    
                <ul>
                    <li><strong>Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</strong></li>
                </ul>
        
                    <p>Es importante escoger cuidadosamente una imagen de fondo en una página HTML para garantizar relevancia, legibilidad, tamaño adecuado, accesibilidad y carga rápida.</p>
    
                <ul>
                    <li><strong>Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt??</strong></li>
                </ul>
        
                <p>Al elegir las unidades de una propiedad de estilo CSS, recomendaría usar % para elementos que necesitan ser fluidos y adaptables, px para elementos de diseño fijo, y pt para tamaños de texto específicos en impresión.</p>                
    
                <ul>
                    <li><strong>¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</strong></li>
                </ul>
        
                    <p>
                        El uso de una versión minimizada del CSS mejora el rendimiento del sitio al reducir el tamaño de los archivos, lo que resulta en tiempos de carga más rápidos al reducir la cantidad de datos que el navegador necesita descargar y procesar.</p>
                
                
                
            </section>
    
            <h2 class="light-blue-text text-lighten-1">Preguntas y Respuestas Lab 4</h2>
    
            <h4>1. ¿Qué diferencias y semejanzas hay entre Java y JavaScript?</h4>
            <p>
                <strong>Diferencias:</strong> Java es un lenguaje de programación de propósito general, orientado a objetos, mientras que JavaScript es un lenguaje de script interpretado principalmente utilizado para el desarrollo web. Java requiere compilación antes de la ejecución, mientras que JavaScript se ejecuta directamente en el navegador. 
                <br>
                <strong>Semejanzas:</strong> Ambos lenguajes tienen sintaxis similar a C, son utilizados para desarrollar software y pueden interactuar con HTML y CSS.
            </p>
    
            <h4>2. ¿Qué métodos tiene el objeto Date? (Menciona al menos 5)</h4>
            <ul>
                <li>getFullYear()</li>
                <li>getMonth()</li>
                <li>getDate()</li>
                <li>getHours()</li>
                <li>getMinutes()</li>
            </ul>
    
            <h4>3. ¿Qué métodos tienen los arreglos? (Menciona al menos 5)</h4>
            <ul>
                <li>push()</li>
                <li>pop()</li>
                <li>shift()</li>
                <li>unshift()</li>
                <li>splice()</li>
            </ul>
    
            <h4>4. ¿Cómo se declara una variable con alcance local dentro de una función?</h4>
            <p>
                Una variable con alcance local dentro de una función se declara utilizando la palabra clave <code>let</code> o <code>const</code> dentro del bloque de la función.
            </p>
    
            <h4>5. ¿Qué implicaciones tiene utilizar variables globales dentro de funciones?</h4>
            <p>
                Utilizar variables globales dentro de funciones puede llevar a la contaminación del espacio de nombres, haciéndolo menos legible y más propenso a errores. Además, puede dificultar el mantenimiento y la depuración del código, ya que las variables globales pueden ser modificadas desde cualquier parte del programa.
            </p>
    
                
            
            <section id="contacto">
    
                <h2 id="diamantes">Contacto</h2>
                <p>Puedes contactarme a través de las siguientes formas:</p>
    
                <ul>
                    <li>Correo electrónico: A01704203@tec.mx</li>
                    <li>Celular: 442 467 7892</li>
                </ul>
    
            </section>
        </main>
    
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Calculadora de Área de Rectángulo</title>
        </head>
        <body>
            <h4>Calculadora de Área de Rectángulo</h4>
            <p>Ancho del rectángulo: <span id="ancho">5</span></p>
            <p>Altura del rectángulo: <span id="altura">10</span></p>
            <button onclick="mostrarAreaRectangulo()">Calcular Área</button>
        
            <script src="Script.js"></script>
        </body>
        
    
        <script type="text/javascript" src="materialize.js"></script> 
    
    </div>
    </body>
    </html>`);
        response.end();
    }


    else if(request.url == '/construir' && request.method=="GET"){
        response.write(header);
        response.write(`
            <h1 class="title">CONSTRUYE CONSTRUYE MAMAHUEVO</h1>
            <form action="construir" method="POST">
                <label class="label" for="nombre">Nombre</label>
                <input name="nombre" id="nombre" type="text" class="input"><br>
                <label class="label" for="imagen">Imagen</label>
                <input name="imagen" id="imagen" type="text" class="input"><br><br>
                <input class="button-is-danger" type="submit" value="Construir">
            </form>
        `)
        response.write(footer);
        response.end();}

        else if (request.url == '/construir' && request.method=="POST"){

            const datos=[];
    
            request.on('data', (dato)=>{
                console.log(dato);
                datos.push(dato);
            });
    
            const filesystem = require('fs');
            
            return request.on('end',() =>{
                const datos_completos = Buffer.concat(datos).toString();
                console.log(datos_completos);
                const nombre = datos_completos.split('&')[0].split('=')[1];
                console.log(nombre);
                const imagen = datos_completos.split('&')[1].split('=')[1];
                console.log(imagen);
                const decodedimagen = decodeURIComponent(imagen);
                console.log(decodedimagen);
                construcciones.push({nombre: nombre, imagen: decodedimagen});
                const dataToSave = 'Nombre: ${nombre}, Imagen: ${decodedimagen}\n;'
                filesystem.appendFileSync("datos.txt", dataToSave);
                return response.end();});}

                else{
                    response.statusCode = 404;
                    response.setHeader('Content-Type', 'text/html');
                    response.write(header);
                    response.write(`
                            <section class="section">
                                <div class="container">
                                    <h1 class="title">Ups,no existe tu mundo!</h1>
                                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ae2dd6cb-d761-4361-a4fb-c278ed98e7e0/detqtlt-d5792735-d39e-4081-ba59-90e1021d52b2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlMmRkNmNiLWQ3NjEtNDM2MS1hNGZiLWMyNzhlZDk4ZTdlMFwvZGV0cXRsdC1kNTc5MjczNS1kMzllLTQwODEtYmE1OS05MGUxMDIxZDUyYjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MjhNrGbPzJZzeqgMI4lRdS5E8n2X-Qe_AOWhE09gaec" alt="Placeholder image">
            
                                </div>`);
                    response.write(footer);
                    response.end();}

function calcularPromedio(arr) {
    let suma = arr.reduce((a, b) => a + b, 0);
    return suma / arr.length;
}

let numeros = [1, 2, 3, 4, 5];
console.log(calcularPromedio(numeros));

const fs = require('fs');

function escribirEnArchivo(texto) {
    fs.writeFile('texto.txt', texto, (err) => {
        if (err) throw err;
        console.log('El archivo ha sido guardado!');
    });
}

escribirEnArchivo('Hola, mundo!');

function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

console.log(invertirCadena('Hola, mundo!'));


});

server.listen(3000);