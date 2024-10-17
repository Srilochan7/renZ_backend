const router = require('express').Router();
const userController = require('../controllers/user.controller');


// Define your routes here
router.post('/registration', userController.register);
router.post('/login', userController.login);
router.get('/profile', (req, res) => {
    res.json({ status: true, user: req.user });
});

module.exports = router; // Corrected export
