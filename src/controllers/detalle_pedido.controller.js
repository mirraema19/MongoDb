const DetallePedidoModel = require('../models/detalle_pedido.model');

const index = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const skip = (page - 1) * limit;

        const detallesPedido = await DetallePedidoModel.find().skip(skip).limit(limit);

        let response = {
            message: "Se obtuvieron los detalles de pedido correctamente",
            data: detallesPedido
        };

        if (page && limit) {
            const totalDetallesPedido = await DetallePedidoModel.countDocuments();
            const totalPages = Math.ceil(totalDetallesPedido / limit);
            const currentPage = parseInt(page);

            response = {
                ...response,
                total: totalDetallesPedido,
                totalPages,
                currentPage,
            };
        }

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrió un error al obtener los detalles de pedido",
            error: error.message
        });
    }
};

const getById = async (req, res) => {
    try {
        const detallePedidoId = req.params.id;
        const detallePedido = await DetallePedidoModel.findById(detallePedidoId);

        if (!detallePedido) {
            return res.status(404).json({
                message: "Detalle de pedido no encontrado"
            });
        }

        return res.status(200).json({
            message: "Detalle de pedido obtenido exitosamente",
            detallePedido
        });
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrió un error al obtener el detalle de pedido",
            error: error.message
        });
    }
};

const create = async (req, res) => {
    try {
        const nuevoDetallePedido = new DetallePedidoModel(req.body);
        await nuevoDetallePedido.save();

        return res.status(201).json({
            message: "Detalle de pedido creado exitosamente"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Falló al crear el detalle de pedido",
            error: error.message
        });
    }
};

const update = async (req, res) => {
    try {
        const detallePedidoId = req.params.id;
        const datosActualizar = {
            ...req.body,
        };

        const detallePedidoActualizado = await DetallePedidoModel.findByIdAndUpdate(detallePedidoId, datosActualizar);

        if (!detallePedidoActualizado) {
            return res.status(404).json({
                message: "Detalle de pedido no encontrado"
            });
        }

        return res.status(200).json({
            message: "Detalle de pedido actualizado exitosamente"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrió un error al editar el detalle de pedido",
            error: error.message
        });
    }
};

const deleteDetallePedido = async (req, res) => {
    try {
        const detallePedidoId = req.params.id;
        const detallePedidoEliminado = await DetallePedidoModel.findByIdAndDelete(detallePedidoId);

        if (!detallePedidoEliminado) {
            return res.status(404).json({
                message: "Detalle de pedido no encontrado"
            });
        }

        return res.status(200).json({
            message: "Detalle de pedido eliminado exitosamente"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrió un error al eliminar el detalle de pedido",
            error: error.message
        });
    }
};

module.exports = {
    index,
    getById,
    create,
    update,
    deleteDetallePedido
};
