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
const USERNAME = process.env.db_username;
const PASSWORD = process.env.db_password;
const DATABASE = process.env.db_name;
const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.bl7ud.mongodb.net/${DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(checkForAuthenticationCookies('token'));


connect(MONGODB_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB Connection Failed', err));

app.use('/api/auth', require('./routes/user.js'));
app.use('/api/payment', require('./routes/order.js'));
app.use("/user", userRout);
app.use("/order", orderRout);



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));