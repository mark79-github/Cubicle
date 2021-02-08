exports.validateProductCreate = function (req, res, next) {
    const {name, description, imageUrl, difficultyLevel} = req.body;

    let product = {
        title: 'Create',
        errors: [],
    };

    if (name.trim().length === 0 || name.trim().length < 5) {
        product.errors.push('Name must be at least 5 characters');
    } else {
        product.name = name;
    }

    if (description.trim().length === 0 || description.trim().length < 20) {
        product.errors.push('Description must be at least 20 characters');
    } else {
        product.description = description;
    }

    if (!/^https?/.test(imageUrl.trim())) {
        product.errors.push('ImageUrl must start with http or https');
    } else {
        product.imageUrl = imageUrl;
    }

    if (!Number(difficultyLevel) || Number(difficultyLevel) < 1 || Number(difficultyLevel) > 6) {
        product.errors.push('Difficulty level must be between 1 and 6');
    } else {
        product.difficultyLevel = difficultyLevel;
    }

    if (!product.errors.length) {
        next();
        return;
    }

    return res.render('products/create', {...product, message: product.errors.shift()});
}

exports.validateProductEdit = function (req, res, next) {
    const {name, description, imageUrl, difficultyLevel} = req.body;

    let product = {
        errors: [],
    };

    if (name.trim().length === 0 || name.trim().length < 5) {
        product.errors.push('Name must be at least 5 characters');
    } else {
        product.name = name;
    }

    if (description.trim().length === 0 || description.trim().length < 20) {
        product.errors.push('Description must be at least 20 characters');
    } else {
        product.description = description;
    }

    if (!/^https?/.test(imageUrl.trim())) {
        product.errors.push('ImageUrl must start with http or https');
    } else {
        product.imageUrl = imageUrl;
    }

    if (!Number(difficultyLevel) || Number(difficultyLevel) < 1 || Number(difficultyLevel) > 6) {
        product.errors.push('Difficulty level must be between 1 and 6');
    } else {
        product.difficultyLevel = difficultyLevel;
    }

    if (!product.errors.length) {
        next();
        return;
    }

    res.render('products/edit', {title: 'Edit', product, message: product.errors.shift()});
}