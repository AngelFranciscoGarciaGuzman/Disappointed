const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));



//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasApp = require('./Routes/construcciones.routes.js');

app.use('/', rutasApp)

app.use((request, response, next) => {
    response.status(404)
    response.sendFile(
        path.join(__dirname, 'views', '404.html')
    )});


app.listen(3000);