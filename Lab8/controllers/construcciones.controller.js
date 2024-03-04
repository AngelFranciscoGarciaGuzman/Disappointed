const Construccion = require('../models/construccion.model');

const Emulador = require('../models/emulador.model');

exports.get_construir = (request, response, next) => {
    response.render('construir'); 
};

exports.post_construir = (request, response, next) => {
    console.log(request.body);
    const construccion = 
        new Construccion(request.body.nombre, request.body.imagen);
    construccion.save();
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    response.render('construcciones', {
        construcciones: Construccion.fetchAll(),
    });
}

exports.get_emuladores = (request, response, next) => {
    response.render('emuladores', {
        emuladores: Emulador.fetchAll(),
    }); 
};
