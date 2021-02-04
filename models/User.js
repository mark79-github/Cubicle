const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        validate: new RegExp('^[A-Za-z0-9]+$', 'g')
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate: new RegExp('^[A-Za-z0-9]+$', 'g')
    }
});

module.exports = mongoose.model('User', userSchema);