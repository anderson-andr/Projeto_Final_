const express = require('express');
const usuario_controllers = require('../controllers/usuarios_controllers');

const router = express.Router();

router.get('/', usuario_controllers.listar)
router.post('/', usuario_controllers.inserir)
router.get('/buscar',usuario_controllers.buscarUsuario)
router.get('/usuario',usuario_controllers.UsuarioUser)
router.get('/:id', usuario_controllers.buscarPorId)
router.put('/:id', usuario_controllers.atualizar)
router.delete('/:id', usuario_controllers.deletar)

module.exports = router;