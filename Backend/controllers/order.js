const Order = require("../Models/order");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const dotenv = require("dotenv");
dotenv.config();    





const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
async function handleOrder(req, res) {
  const { amount } = req.body;
  try {
    const options = {
      amount: amount * 100, // in paise
      currency: "INR",
      receipt: `receipt_order_${Math.random() * 1000}`,
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function handleVerifyPayment(req, res) {
  const {
    amount,
    copies,
    bookTitle,
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = req.body;
  console.log("User inside /verify:", req.user);

  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(sign.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    const newOrder = await Order.create({
      orderId: req.user?._id || null, // If using authentication
      bookTitle: bookTitle, // You can pass this from frontend too
      amount: amount, // Or get from frontend
      copies: copies, // Or get from frontend
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      name: req.user?.name || null, // If using authentication
      email: req.user?.email || null, // If using authentication
    });
    console.log("New Order Created:", newOrder);
    return res
      .status(200)
      .json({ success: true, message: "Payment verified and saved" });
  } else {
    return res
      .status(400)
      .json({ success: false, message: "Invalid signature" });
  }
}

module.exports = { handleOrder, handleVerifyPayment };
