const express = require('express');
const router = express.Router();

const registerController = require('../controllers/auth/registerController');
const loginController = require('../controllers/auth/loginController');
const logoutController = require('../controllers/auth/logoutController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public Routes
router.post('/register', registerController);
router.post('/login', loginController);

// Protected Test Route (for cookie verification check)
router.get('/profile', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Authenticated user', user: req.user });
});

// Logout Route
router.post('/logout', logoutController);

module.exports = router;
