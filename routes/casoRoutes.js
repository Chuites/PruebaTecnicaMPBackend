const express = require('express');
const router = express.Router();
const controller = require('../controllers/casoController');

router.post('/', controller.crearCaso);
router.put('/:id/estado', controller.cambiarEstado);
router.post('/reasignar', controller.reasignar);

module.exports = router;
