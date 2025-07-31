const express = require('express');
const router = express.Router();
const controller = require('../controllers/fiscalController');

router.post('/', controller.crearFiscal);
router.get('/fiscalia/:id', controller.obtenerFiscalesPorFiscalia);
router.post('/login', controller.loginFiscal);
router.get('/', controller.listarLogs);



module.exports = router;
