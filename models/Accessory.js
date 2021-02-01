const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 150,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/,
    }
});

module.exports = mongoose.model('Accessory', accessorySchema);