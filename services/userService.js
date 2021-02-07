const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const bcrypt = require('bcrypt');

const register = async (data) => {

    let user = await User.findOne({username: data.username});
    if (user) throw {message: 'Username is in use'};

    user = new User(data);
    return user.save();
}

const login = async (data) => {
    const {username, password} = data;

    let user = await User.findOne({username}) || {};
    let isMatch = await bcrypt.compare(password, user.password || '');

    if (!user || !isMatch) {
        throw {message: 'Wrong username and/or password'}
    }
    return jwt.sign({id: user._id, username: user.username}, config.secret, {expiresIn: "1h"});
};

module.exports = {
    register,
    login
}
