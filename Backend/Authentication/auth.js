require('dotenv').config();
const JWT = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

function createTokenForUser(user) {
    const payload = {
        id: user._id,
        email: user.email,
    };
   const token = JWT.sign(payload, secret);
   return token;
}

function verifyToken(token){
    
        const payload = JWT.verify(token, secret);
        return payload;
}

module.exports = { createTokenForUser, verifyToken}