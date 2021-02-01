exports.validateAccessory = function (req, res, next) {
    let isValid = true;

    const {name, description, imageUrl} = req.body;

    if (description.trim().length === 0 || description.trim().length > 150) {
        isValid = false;
    }

    if (name.trim().length === 0) {
        isValid = false;
    }

    isValid = /^https?/.test(imageUrl.trim());

    if (isValid) {
        next();
    } else {
        res.send('invalid data');
        //TODO display that entered data is invalid
    }
}