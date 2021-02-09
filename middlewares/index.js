const isGuest = require('./user/isGuest');
const isLogged = require('./user/isLogged');
const isAuthenticated = require('./user/isAuthenticated');
const isCreator = require('./user/isCreator');
const validate = require('./data/validate');

module.exports = {
    isAuthenticated,
    isGuest,
    isLogged,
    isCreator,
    validate
}
