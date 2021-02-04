const User = require('../models/User');

function create(data) {
    let user = new User(data);
    return user.save();
}

function login(data) {
    const {username, password} = data;
}

module.exports = {
    create,
    login
}