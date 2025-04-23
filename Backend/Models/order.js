const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    orderId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    bookTitle: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    copies: {
        type: Number,
        required: true,
    },
    razorpayOrderId: {
        type: String,
        required: true,
    },
    razorpayPaymentId: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;