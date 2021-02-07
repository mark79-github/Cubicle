const {Router} = require('express');
const userService = require('../services/userService');
const {validateUser} = require('../helpers/userHelpers');
const config = require('../config/config');
const {isGuest, isAuthenticated} = require('../middlewares');

const router = Router();

router.get('/login', isGuest, (req, res) => {
    res.render('users/login', {title: 'Login'});
});

router.post('/login', isGuest, async (req, res) => {
    try {
        let token = await userService.login(req.body);

        res.cookie(config.authCookie, token, {maxAge: 1000 * 60 * 60, httpOnly: true});
        res.redirect('/products');
    } catch (error) {
        res.render('users/login', {message: error.message});
    }
});

router.get('/register', isGuest, (req, res) => {
    res.render('users/register', {title: 'Register'});
});

router.post('/register', isGuest, validateUser, async (req, res) => {
    try {
        await userService.register(req.body);
        res.redirect('/users/login');
    } catch (err) {
        res.render('users/register', {title: 'Login', message: err.message})
    }
});

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie(config.authCookie);
    res.redirect('/users/login');
});

module.exports = router;
