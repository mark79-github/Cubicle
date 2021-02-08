function validateRegisterUser(req, res, next) {
    const {username, password, repeatPassword} = req.body;

    let errors = [];

    if (username.trim().length === 0 || username.trim().length < 5) {
        errors.push('Username length must be at least 5 characters');
    }

    if (password.trim().length === 0 || password.trim().length < 8) {
        errors.push('Password length must be at least 8 characters');
    }

    if (password.trim() !== repeatPassword.trim()) {
        errors.push('Both passwords are not equal');
    }

    if (!/^[A-Za-z0-9]+$/.test(username.trim())) {
        errors.push('Username must contains only digits and/or latin letters');
    }

    if (!/^[A-Za-z0-9]+$/.test(password.trim())) {
        errors.push('Password must contains only digits and/or latin letters');
    }

    if (!errors.length) {
        next();
        return;
    }
    res.render('users/register', {title: 'Register', message: errors.shift(), username});

}

function validateLoginUser(req, res, next) {
    const {username, password} = req.body;

    let errors = [];

    if (username.trim().length === 0 || username.trim().length < 5) {
        errors.push('Username must be at least 5 characters');
    }

    if (password.trim().length === 0 || password.trim().length < 8) {
        errors.push('Password length must be at least 8 characters');
    }

    if (!errors.length) {
        next();
        return;
    }
    res.render('users/login', {title: 'Login', message: errors.shift(), username});
}

module.exports = {
    validateRegisterUser,
    validateLoginUser
}