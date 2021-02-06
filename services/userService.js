const User = require('../models/User');

function create(data) {
    let user = new User(data);
    return user.save();
}

function login(data) {
    const {username, password} = data;

    User.findOne({username})
        .then((response) => {
            if (response) {
                return response;
            }
            return 'no user found';
        }).then((user) => {
        console.log(user);
        return user;
    }).catch(console.log);
}

module.exports = {
    create,
    login
}