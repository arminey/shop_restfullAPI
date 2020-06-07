const express = require('express');
const router = express.Router();
const mongoose =  require('mongoose');
const multer = require('multer');

const CheckAuth = require('./../middleware/check-auth');
const ProductsController = require('./../controllers/products');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

const Product = require('./../models/product');


router.get('/', ProductsController.products_get_all);

router.post('/', CheckAuth, upload.single('productImage'), ProductsController.products_create_order);

router.get('/:productId', ProductsController.products_get_order);

router.patch('/:productId', CheckAuth, ProductsController.products_update_order);

router.delete('/:productId', CheckAuth, ProductsController.products_delete_order);

module.exports = router;
