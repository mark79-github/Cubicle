const {constants, msg} = require('../../config/constants');

module.exports = {
    user: {
        register(req, res, next) {
            const {username, password, repeatPassword} = req.body;

            let user = {
                errors: [],
            };

            if (username.trim().length === 0 || username.trim().length < constants.USERNAME_MIN_LENGTH) {
                user.errors.push(msg.USERNAME_MIN_LENGTH);
            } else {
                user.username = username.trim();
            }

            if (!constants.USERNAME_REGEX.test(username.trim())) {
                user.errors.push(msg.USERNAME_ONLY_ALPHABETICAL);
                user.username = undefined;
            }

            if (password.trim().length === 0 || password.trim().length < constants.PASSWORD_MIN_LENGTH) {
                user.errors.push(msg.PASSWORD_MIN_LENGTH);
            }

            if (password.trim() !== repeatPassword.trim()) {
                user.errors.push(msg.CONFIRMATION_PASSWORD_ERROR);
            }

            if (!constants.PASSWORD_REGEX.test(password.trim())) {
                user.errors.push(msg.PASSWORD_ONLY_ALPHABETICAL);
            }

            if (!user.errors.length) {
                next();
                return;
            }
            res.render('users/register', {...user, message: user.errors.shift()});

        },
        login(req, res, next) {
            const {username, password} = req.body;

            let user = {
                errors: [],
            };

            if (username.trim().length === 0 || username.trim().length < constants.USERNAME_MIN_LENGTH) {
                user.errors.push(msg.USERNAME_MIN_LENGTH);
            } else {
                user.username = username.trim();
            }

            if (!constants.USERNAME_REGEX.test(username.trim())) {
                user.errors.push(msg.USERNAME_ONLY_ALPHABETICAL);
                user.username = undefined;
            }

            if (password.trim().length === 0 || password.trim().length < constants.PASSWORD_MIN_LENGTH) {
                user.errors.push(msg.PASSWORD_MIN_LENGTH);
            }

            if (!user.errors.length) {
                next();
                return;
            }
            res.render('users/login', {...user, message: user.errors.shift()})
        },
    },
    product: {
        create(req, res, next) {
            const {name, description, imageUrl, difficultyLevel} = req.body;

            let product = {
                errors: [],
            };

            if (name.trim().length === 0 || name.trim().length < constants.NAME_MIN_LENGTH) {
                product.errors.push(msg.NAME_MIN_LENGTH);
            } else {
                product.name = name.trim();
            }

            if (!constants.NAME_REGEX.test(name.trim())) {
                product.errors.push(msg.NAME_ONLY_ALPHABETICAL_SPACE);
                product.name = undefined;
            }

            if (description.trim().length === 0 || description.trim().length < 20) {
                product.errors.push(msg.DESCRIPTION_MIN_LENGTH);
            } else {
                product.description = description.trim();
            }

            if (!constants.DESCRIPTION_REGEX.test(description.trim())) {
                product.errors.push(msg.DESCRIPTION_ONLY_ALPHABETICAL_SPACE);
                product.description = undefined;
            }

            if (!constants.IMAGE_URL_REGEX.test(imageUrl.trim())) {
                product.errors.push(msg.IMAGE_URL_STARTS_WITH);
            } else {
                product.imageUrl = imageUrl;
            }

            if (!Number(difficultyLevel) || Number(difficultyLevel) < constants.DIFFICULTY_LEVEL_MIN || Number(difficultyLevel) > constants.DIFFICULTY_LEVEL_MAX) {
                product.errors.push(msg.DIFFICULTY_RANGE);
            } else {
                product.difficultyLevel = difficultyLevel;
            }

            if (!product.errors.length) {
                next();
                return;
            }

            return res.render('products/create', {...product, message: product.errors.shift()});
        },
        edit(req, res, next) {
            const {name, description, imageUrl, difficultyLevel} = req.body;

            let product = {
                errors: [],
            };

            if (name.trim().length === 0 || name.trim().length < constants.NAME_MIN_LENGTH) {
                product.errors.push(msg.NAME_MIN_LENGTH);
            } else {
                product.name = name;
            }

            if (!constants.NAME_REGEX.test(name.trim())) {
                product.errors.push(msg.NAME_ONLY_ALPHABETICAL_SPACE);
                product.name = undefined;
            }

            if (description.trim().length === 0 || description.trim().length < constants.DESCRIPTION_MIN_LENGTH) {
                product.errors.push(msg.DESCRIPTION_MIN_LENGTH);
            } else {
                product.description = description;
            }

            if (!constants.DESCRIPTION_REGEX.test(description.trim())) {
                product.errors.push(msg.DESCRIPTION_ONLY_ALPHABETICAL_SPACE);
                product.description = undefined;
            }

            if (!constants.IMAGE_URL_REGEX.test(imageUrl.trim())) {
                product.errors.push(msg.IMAGE_URL_STARTS_WITH);
            } else {
                product.imageUrl = imageUrl;
            }

            if (!Number(difficultyLevel) || Number(difficultyLevel) < constants.DIFFICULTY_LEVEL_MIN || Number(difficultyLevel) > constants.DIFFICULTY_LEVEL_MAX) {
                product.errors.push(msg.DIFFICULTY_RANGE);
            } else {
                product.difficultyLevel = difficultyLevel;
            }

            if (!product.errors.length) {
                next();
                return;
            }

            res.render('products/edit', {...product, message: product.errors.shift()});
        }
    },
    accessory: {
        create(req, res, next) {
            const {name, description, imageUrl} = req.body;

            let accessory = {
                errors: [],
            };

            if (name.trim().length === 0 || name.trim().length < constants.NAME_MIN_LENGTH) {
                accessory.errors.push(msg.NAME_MIN_LENGTH);
            } else {
                accessory.name = name;
            }

            if (description.trim().length === 0 || description.trim().length < constants.DESCRIPTION_MIN_LENGTH) {
                accessory.errors.push(msg.DESCRIPTION_MIN_LENGTH);
            } else {
                accessory.description = description;
            }

            if (!constants.IMAGE_URL_REGEX.test(imageUrl.trim())) {
                accessory.errors.push(msg.IMAGE_URL_STARTS_WITH);
            } else {
                accessory.imageUrl = imageUrl;
            }

            if (!accessory.errors.length) {
                next();
                return;
            }

            res.render('accessories/create', {...accessory, message: accessory.errors.shift()});
        }
    }
}