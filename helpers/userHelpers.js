exports.validateUser = function (req, res, next) {
    const {username, password, repeatPassword} = req.body;

    let isValid = true;

    if (username.trim().length === 0 || username.trim().length < 5) {
        isValid = false;
    }

    if (password.trim().length === 0 || password.trim().length < 8) {
        isValid = false;
    }

    if (password.trim() !== repeatPassword.trim()) {
        isValid = false;
    }

    if (!/^[A-Za-z0-9]+$/.test(username.trim())) {
        isValid = false;
    }

    if (!/^[A-Za-z0-9]+$/.test(password.trim())) {
        isValid = false;
    }

    if (isValid) {
        next();
    } else {
        res.send('Invalid data');
        //TODO display that entered data is invalid
    }
}