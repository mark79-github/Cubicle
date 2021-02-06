const jwt = require('jsonwebtoken');
const {authCookie, secret} = require('../config/config');

module.exports = () => {
    return(req, res, next) => {
        let token = req.cookies[authCookie];
        if (token) {
            jwt.verify(token, secret, function (err, data) {
                if (err) {
                    res.clearCookie(authCookie);
                } else {
                    req.user = data;
                    // res.locals.user = data;
                    res.locals.isLogged = !! data;
                }
            });
        }

        next();
    }
}
