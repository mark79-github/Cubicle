const isGuest = require('./isGuest');
const isAuthenticated = require('./isAuthenticated');
const auth = require('./auth');

module.exports = {
    auth,
    isGuest,
    isAuthenticated
}
