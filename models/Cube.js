const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
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
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    creatorId: {
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