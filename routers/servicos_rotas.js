const express = require('express');
const servico_Controller = require('../controllers/servicos_controllers')

const router = express.Router();



router.get('/listar', servico_Controller.listar)
router.post('/', servico_Controller.inserir)
router.get('/', servico_Controller.servicosByUser)
router.get('/:id', servico_Controller.buscarPorId)
router.put('/:id', servico_Controller.atualizar)
router.delete('/:id', servico_Controller.deletar)
module.exports = router;