const express = require('express');
const usuarioController = require('../controllers/usuarios_controllers');

const router = express.Router();
//Rota do recurso: "/api/produtos"


router.post('/', usuarioController.validarUsuario);


module.exports = router;