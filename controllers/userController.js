const {Router} = require('express');
const userService = require('../services/userService');
const {validateLoginUser, validateRegisterUser} = require('../helpers/userHelpers');
const config = require('../config/config');
const {isGuest, isAuthenticated} = require('../middlewares');

const router = Router();

router.get('/login', isGuest, (req, res) => {
    res.render('users/login', {title: 'Login'});
});

router.post('/login', isGuest, validateLoginUser, (req, res) => {

    const cookieOptions = {maxAge: 1000 * 60 * 60, httpOnly: true}

    // try {
    //     let token = userService.login(req.body);
    //     res.cookie(config.authCookie, token, cookieOptions);
    //     res.redirect('/products');
    // } catch (error) {
    //     res.render('users/login', {message: error.message});
    // }

    userService.login(req.body)
        .then((token) => {
            if (!token) {
                throw {message: 'Wrong username and/or password'};
            }
            return res
                .cookie(config.authCookie, token, cookieOptions)
                .redirect('/products');
        })
        .catch((error) => {
            res.render('users/login', {message: error.message});
        });
});

router.get('/register', isGuest, (req, res) => {
    res.render('users/register', {title: 'Register'});
});

router.post('/register', isGuest, validateRegisterUser, (req, res) => {
    // try {
    //     await userService.register(req.body);
    //     res.redirect('/users/login');
    // } catch (err) {
    //     res.render('users/register', {title: 'Register', message: err.message});
    // }

    userService.register(req.body)
        .then(() => {
            res.redirect('/users/login');
        })
        .catch(error => {
            res.render('users/register', {title: 'Register', message: error.message});
        });
});

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie(config.authCookie);
    res.redirect('/users/login');
});

module.exports = router;
