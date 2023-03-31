const express = require('express');
const router = express.Router();
const funcionarioController = require('../controller/funcionariocontroller.js');

router.get('/', funcionarioController.getFuncionario);
router.get('/:id', funcionarioController.getFuncionarioId);

router.post('/', funcionarioController.createFuncionario);
router.put('/:id', funcionarioController.updateFuncionario);
router.delete('/:id', funcionarioController.deleteFuncionario);


module.exports = router;