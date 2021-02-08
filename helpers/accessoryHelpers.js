exports.validateAccessory = function (req, res, next) {
    const {name, description, imageUrl} = req.body;

    let errors = [];
    let accessory = {};

    if (name.trim().length === 0 || name.trim().length < 5) {
        errors.push('Name must be at least 5 characters');
    } else {
        accessory.name = name;
    }

    if (description.trim().length === 0 || description.trim().length < 20) {
        errors.push('Description must be at least 20 characters');
    } else {
        accessory.description = description;
    }

    if (!/^https?/.test(imageUrl.trim())) {
        errors.push('ImageUrl must start with http or https');
    } else {
        accessory.imageUrl = imageUrl;
    }

    if (!errors.length) {
        next();
        return;
    }

    console.log(req.path);

    res.render('accessories/create', {title: 'Create accessory', message: errors.shift(), ...accessory});
}