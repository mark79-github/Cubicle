const {Router} = require('express');
const userService = require('../services/userService');
const {validateUser} = require('../helpers/userHelpers');
const config = require('../config/config');


const router = Router();

router.get('/login', (req, res) => {
    res.render('users/login', {title: 'Login'});
});

router.post('/login', (req, res) => {
    // TODO :
});

router.get('/register', (req, res) => {
    res.render('users/register', {title: 'Register'});
});

router.post('/register', validateUser, (req, res) => {
    userService.create(req.body)
        .then(() => res.redirect('/users/login'))
        .catch((error) => {
            console.log(error);
            res.status(500).end();
        });
});

router.get('/logout', (req, res) => {
    res.clearCookie(config.authCookie);
    res.redirect('/');
});

module.exports = router;