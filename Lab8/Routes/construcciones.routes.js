const express = require('express');
const router = express.Router();
const construccionesController = require('../controllers/construcciones.controller');

router.get('/construir', construccionesController.get_construir);
router.post('/construir', construccionesController.post_construir);
router.get('/', construccionesController.get_root);

router.get('/emuladores', construccionesController.get_emuladores);

module.exports = router;