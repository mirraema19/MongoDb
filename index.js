require('dotenv').config();
require('./src/configs/db.config');

const express = require('express');
const app = express();
const detallePedidoRouter = require('./src/routes/detalle_pedido.route'); 
const authRouter = require('./src/routes/auth.route');
const uploadsRouter = require('./src/routes/uploads.route');

app.use(express.json());
app.use('/detalles-pedido', detallePedidoRouter); 
app.use('/uploads', uploadsRouter);
app.use('/auth', authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API escuchando en el puerto ${PORT}`);
});
