console.log("Hello World");


const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'ooohhh mai gawwd');

const arreglo = [2000, 400, 60, 800, 9, 90, 50];

for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
}