const express = require('express');
const router = express.Router();
const detallePedidoController = require('../controllers/detalle_pedido.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', authMiddleware.verificarJWT, detallePedidoController.index);
router.get('/:id', authMiddleware.verificarJWT, detallePedidoController.getById);
router.post('/', authMiddleware.verificarJWT, detallePedidoController.create);
router.delete('/:id', authMiddleware.verificarJWT, detallePedidoController.deleteDetallePedido);
router.patch('/:id', authMiddleware.verificarJWT, detallePedidoController.update);

module.exports = router;
