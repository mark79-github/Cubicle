const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        validate: /^[A-Za-z0-9\s]+$/
    },
    description: {
        type: String,
        required: true,
        minlength: 20,
        validate: /^[A-Za-z0-9\s]+$/
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/,
    }
});

module.exports = mongoose.model('Accessory', accessorySchema);