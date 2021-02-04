const {Router} = require('express');
const userService = require('../services/userService')
const router = Router();

router.get('/login', (req, res) => {
    res.render('users/login', {title: 'Login'});
});

router.post('/login', (req, res) => {
    // TODO 04.02.2021
});

router.get('/register', (req, res) => {
    res.render('users/register', {title: 'Register'});
});

router.post('/register', (req, res) => {
    // TODO 04.02.2021
});


module.exports = router;