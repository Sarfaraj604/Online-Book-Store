require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const { json } = require('body-parser');
const { connect } = require('mongoose');
const userRout = require('./routes/user');
const orderRout = require('./routes/order');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {checkForAuthenticationCookies} = require('./Middleware/authentication.js');
const MONGODB_URI = process.env.MONGODB_URI;
const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(checkForAuthenticationCookies('token'));


// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

connect(MONGODB_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB Connection Failed', err));

app.use('/api/auth', require('./routes/user.js'));
app.use('/api/payment', require('./routes/order.js'));
app.use("/user", userRout);
app.use("/order", orderRout);


// app.post("/api/payment/order", async (req, res) => {
//   const { amount } = req.body;
//   try {
//     const options = {
//       amount: amount * 100, // in paise
//       currency: "INR",
//       receipt: `receipt_order_${Math.random() * 1000}`,
//     };
//     const order = await razorpay.orders.create(options);
//     res.json(order);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.post("/api/payment/verify", async (req, res) => {
//   const { amount, copies, bookTitle, razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
//   console.log("User inside /verify:", req.user);

//   const sign = razorpay_order_id + "|" + razorpay_payment_id;
//   const expectedSignature = crypto
//     .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//     .update(sign.toString())
//     .digest("hex");

//     if (expectedSignature === razorpay_signature) {
//       const newOrder = await Order.create({
//         orderId: req.user?._id || null, // If using authentication
//         bookTitle: bookTitle,     // You can pass this from frontend too
//         amount: amount,                  // Or get from frontend
//         copies: copies,                     // Or get from frontend
//         razorpayOrderId: razorpay_order_id,
//         razorpayPaymentId: razorpay_payment_id,
//         name: req.user?.name || null, // If using authentication
//         email: req.user?.email || null, // If using authentication
//       });
//       console.log('New Order Created:', newOrder);
//       return res.status(200).json({ success: true, message: "Payment verified and saved" });
//     } else {
//       return res.status(400).json({ success: false, message: "Invalid signature" });
//   }
// });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));