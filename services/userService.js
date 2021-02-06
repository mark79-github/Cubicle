const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const bcrypt = require('bcrypt');

const create = (data) => {

    //TODO: check if username already exists

    let user = new User(data);
    return user.save();
}

const login = async (data) => {
    const {username, password} = data;

    let user = await User.findOne({username});
    if (!user) throw {message: 'User not found'};

    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw {message: 'Password does not match'};

    return jwt.sign({id: user._id}, config.secret, {expiresIn: "1h"});
};

module.exports = {
    create,
    login
}
