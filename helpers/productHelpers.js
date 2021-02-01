exports.validateProduct = function (req, res, next) {
    let isValid = true;

    const {name, description, imageUrl, difficultyLevel} = req.body;

    if (name.trim().length === 0) {
        isValid = false;
    }

    if (description.trim().length === 0 || description.trim().length > 150) {
        isValid = false;
    }

    isValid = /^https?/.test(imageUrl.trim());

    if (!Number(difficultyLevel) || Number(difficultyLevel) < 1 || Number(difficultyLevel) > 6) {
        isValid = false;
    }

    if (isValid) {
        next();
    } else {
        res.send('invalid data');
        //TODO display that entered data is invalid
    }
}