const express = require('express');
const usuario_controllers = require('../controllers/usuarios_controllers');

const servico_Controller = require('../controllers/usuarios_controllers');

const router = express.Router();


router.post('/', usuario_controllers.inserir)

module.exports = router;