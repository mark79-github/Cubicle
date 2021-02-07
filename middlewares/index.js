const isGuest = require('./isGuest');
const isAuthenticated = require('./isAuthenticated');
const auth = require('./auth');
const isCreator = require('./isCreator');

module.exports = {
    auth,
    isGuest,
    isAuthenticated,
    isCreator
}
