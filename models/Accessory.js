const mongoose = require('mongoose');
const {constants} = require('../config/constants');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: constants.NAME_MIN_LENGTH,
    },
    description: {
        type: String,
        required: true,
        minlength: constants.DESCRIPTION_MIN_LENGTH,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: constants.IMAGE_URL_REGEX,
    }
});

module.exports = mongoose.model('Accessory', accessorySchema);