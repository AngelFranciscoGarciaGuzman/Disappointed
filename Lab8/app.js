const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasApp = require('./Routes/construcciones.routes.js');

app.use('/', rutasApp);

app.use((request, response, next) => {
    response.status(404)
    response.send('no existe papu xd')});


app.listen(3000);