const express = require('express');
const router = express.Router();
const { handleSignup, handleLogin, handleLogout, handleAuthCheck, handleProfile } = require('../controllers/user');
const { restrictToLoggedIn } = require('../Middleware/authentication');

// Public routes
router.post('/signup', handleSignup);
router.post('/login', handleLogin);

// Modified check-auth route
router.get('/check-auth', handleAuthCheck);

// Protected routes
router.post('/logout', restrictToLoggedIn, handleLogout);
router.get('/profile', restrictToLoggedIn, handleProfile);

module.exports = router;