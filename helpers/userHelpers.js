exports.validateUser = function (req, res, next) {
    const {username, password, repeatPassword} = req.body;

    let error = {
        title: 'Register'
    }

    if (username.trim().length === 0 || username.trim().length < 5) {
        // res.locals.message = 'Username length must be at least 5 characters';
        return res.render('users/register', Object.assign(error, {message: 'Username length must be at least 5 characters'}));
    }

    if (password.trim().length === 0 || password.trim().length < 8) {
        return res.render('users/register', Object.assign(error, {message: 'Password length must be at least 8 characters'}));
    }

    if (password.trim() !== repeatPassword.trim()) {
        return res.render('users/register', Object.assign(error, {message: 'Both passwords are not equal'}));
    }

    if (!/^[A-Za-z0-9]+$/.test(username.trim())) {
        return res.render('users/register', Object.assign(error, {message: 'Username must contains only digits and/or latin letters'}));
    }

    if (!/^[A-Za-z0-9]+$/.test(password.trim())) {
        return res.render('users/register', Object.assign(error, {message: 'Password must contains only digits and/or latin letters'}));
    }

    next();
}