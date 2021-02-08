const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
    },
    description: {
        type: String,
        required: true,
        minlength: 20,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/,
    }
});

module.exports = mongoose.model('Accessory', accessorySchema);