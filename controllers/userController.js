const {Router} = require('express');
const userService = require('../services/userService');
const {validateUser} = require('../helpers/userHelpers');


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

router.post('/register', validateUser, (req, res) => {
    userService.create(req.body)
        .then(() => res.redirect('/users/login'))
        .catch(() => res.status(500).end());
});

module.exports = router;