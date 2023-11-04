require('dotenv').config();
require('../configs/db.config');

const DetallePedido = require('../models/detalle_pedido.model');
const mongoose = require('mongoose');

const detallesPedido = [
    {
        pedidoId: 'pedido1',
        productoId: 'producto1',
        cantidad: 2,
        precio_unitario: 10.99,
    },
    {
        pedidoId: 'pedido1',
        productoId: 'producto2',
        cantidad: 1,
        precio_unitario: 15.99,
    },
    {
        pedidoId: 'pedido2',
        productoId: 'producto3',
        cantidad: 3,
        precio_unitario: 20.49,
    },
    
];

DetallePedido.deleteMany({})
    .then(() => {
        return DetallePedido.insertMany(detallesPedido);
    })
    .then(() => {
        console.log("Detalles de pedido creados");
        mongoose.connection.close();
    })
    .catch((error) => {
        console.log(error);
        mongoose.connection.close();
    });
