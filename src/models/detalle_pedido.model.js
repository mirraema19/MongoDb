const mongoose = require('mongoose');

const detallePedidoSchema = mongoose.Schema({
    pedidoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pedido', // Referencia al modelo de Pedido
        required: true,
    },
    productoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto', // Referencia al modelo de Producto
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    },
    precio_unitario: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Detalle_de_pedido', detallePedidoSchema);
