const express = require('express');

const router = express.Router();

const construcciones = [
    {
        nombre: "casa", 
        imagen: "https://media1.tenor.com/m/jJtL4af7Lx8AAAAC/cat-cats.gif",
    }
];
router.get('/construir', (request, response, next) => {
    response.render('construir'); 
});


router.post('/construir', (request, response, next) => {
    console.log(request.body);
    construcciones.push(request.body);
    response.redirect('/');
});


router.get('/', (request, response, next) => {
    console.log('Ruta /');

    response.render('construcciones', {
        construcciones: construcciones,
    })
});


module.exports = router;