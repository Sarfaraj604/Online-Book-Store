const express = require('express');
const router = express.Router();
const { handleOrder, handleVerifyPayment } = require('../controllers/order');




router.post('/create-order', handleOrder);
router.post('/verify', handleVerifyPayment);

module.exports = router;