const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

async function getAll(query) {
    const {search, from, to} = query;

    let queryParams = {};

    if (search) {
        queryParams.name = new RegExp(search, 'i');
    }
    if (from) {
        queryParams.difficultyLevel = {'$gte': Number(from)};
    }
    if (to) {
        if (!queryParams.hasOwnProperty('difficultyLevel')) {
            queryParams.difficultyLevel = {};
        }
        queryParams.difficultyLevel['$lte'] = Number(to);
    }

    return Cube.find(queryParams).lean();
}

function getOne(id, populateData) {
    return populateData
        ? Cube.findById(id).populate('accessories').lean()
        : Cube.findById(id).lean();
}

function create(data) {
    let cube = new Cube(data);
    return cube.save();
}

async function attach(productId, accessoryId) {
    let product = await Cube.findById(productId);
    let accessory = await Accessory.findById(accessoryId);

    product.accessories.push(accessory);
    return product.save();
}

module.exports = {
    create,
    getAll,
    getOne,
    attach,
}