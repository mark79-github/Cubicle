const mongoose = require('mongoose');
const {constants} = require('../config/constants');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: constants.NAME_MIN_LENGTH,
        validate: constants.NAME_REGEX,
    },
    description: {
        type: String,
        required: true,
        minlength: constants.DESCRIPTION_MIN_LENGTH,
        validate: constants.DESCRIPTION_REGEX,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: constants.IMAGE_URL_REGEX,
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: constants.DIFFICULTY_LEVEL_MIN,
        max: constants.DIFFICULTY_LEVEL_MAX
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory',
    }]
})

module.exports = mongoose.model('Cube', cubeSchema);