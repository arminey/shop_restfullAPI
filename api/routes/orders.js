const express = require('express');
const router = express.Router();

const CheckAuth = require('./../middleware/check-auth');
const OrdersController = require('./../controllers/orders');

router.get('/', CheckAuth, OrdersController.orders_get_all);

router.post('/', CheckAuth, OrdersController.orders_create_order);

router.get('/:orderId', CheckAuth, OrdersController.orders_get_order);

router.delete('/:orderId', CheckAuth, OrdersController.orders_delete_order);

module.exports = router;
