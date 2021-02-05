const User = require('../models/User');
const bcrypt = require('bcrypt');
const config = require('../config/config');

const saltRounds = config.saltRounds;

async function create(data) {
    let user = new User(data);
    user.password = await bcrypt.hashSync(user.password, saltRounds);
    return user.save();
}

function login(data) {
    const {username, password} = data;
}

module.exports = {
    create,
    login
}