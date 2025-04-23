const User = require('../Models/User');
const bcrypt = require('bcrypt');
const { createTokenForUser } = require('../Authentication/auth');


async function handleSignup(req, res) {
    try {
        const { name, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        const token = createTokenForUser(newUser);
        res.cookie('token', token, { httpOnly: true, path: '/', sameSite: 'Lax', secure: false });
        return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

async function handleLogin(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please enter email and password" });
        }

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ message: "Invalid credentials" });

        const token = createTokenForUser(user);
        res.cookie('token', token, { httpOnly: true, path: '/', sameSite: 'Lax', secure: false
         });
        return res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

async function handleLogout(req, res) {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            path: '/',
            sameSite: 'Lax',
            secure: false
        });
        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

async function handleAuthCheck(req, res) {
    if (req.user) {
        res.status(200).json({ isAuthenticated: true, user: req.user });
    } else {
        res.status(200).json({ isAuthenticated: false });
    }
};

async function handleProfile(req, res) {
    res.json({ message: "Welcome to your profile!", user: req.user });
}

module.exports = { handleSignup, handleLogin, handleLogout, handleAuthCheck, handleProfile };