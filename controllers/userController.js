const {Router} = require('express');
const {userService} = require('../services');
const config = require('../config/config');
const {isGuest, isAuthenticated, validator} = require('../middlewares');

const router = Router();

router.get('/login', isGuest, (req, res) => {
    res.render('users/login',);
});

router.post('/login', isGuest, validator.user.login, (req, res) => {

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
    res.render('users/register');
});

router.post('/register', isGuest, validator.user.register, (req, res) => {
    // try {
    //     await userService.register(req.body);
    //     res.redirect('/users/login');
    // } catch (err) {
    //     res.render('users/register', {message: err.message});
    // }

    userService.register(req.body)
        .then(() => {
            res.redirect('/users/login');
        })
        .catch(error => {
            res.render('users/register', {message: error.message});
        });
});

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie(config.authCookie);
    res.redirect('/users/login');
});

module.exports = router;
