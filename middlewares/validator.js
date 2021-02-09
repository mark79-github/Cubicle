module.exports = {
    user: {
        register(req, res, next) {
            const {username, password, repeatPassword} = req.body;

            let user = {
                errors: [],
            };

            if (username.trim().length === 0 || username.trim().length < 5) {
                user.errors.push('Username length must be at least 5 characters');
            } else {
                user.username = username.trim();
            }

            if (!/^[A-Za-z0-9]+$/.test(username.trim())) {
                user.errors.push('Username must contains only digits and/or latin letters');
                user.username = undefined;
            }

            if (password.trim().length === 0 || password.trim().length < 8) {
                user.errors.push('Password length must be at least 8 characters');
            }

            if (password.trim() !== repeatPassword.trim()) {
                user.errors.push('Both passwords are not equal');
            }

            if (!/^[A-Za-z0-9]+$/.test(password.trim())) {
                user.errors.push('Password must contains only digits and/or latin letters');
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

            if (username.trim().length === 0 || username.trim().length < 5) {
                user.errors.push('Username must be at least 5 characters');
            } else {
                user.username = username.trim();
            }

            if (password.trim().length === 0 || password.trim().length < 8) {
                user.errors.push('Password length must be at least 8 characters');
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

            if (name.trim().length === 0 || name.trim().length < 5) {
                product.errors.push('Name must be at least 5 characters');
            } else {
                product.name = name.trim();
            }

            if (description.trim().length === 0 || description.trim().length < 20) {
                product.errors.push('Description must be at least 20 characters');
            } else {
                product.description = description.trim();
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
        },
        edit(req, res, next) {
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

            res.render('products/edit', {...product, message: product.errors.shift()});
        }
    },
    accessory: {
        create(req, res, next) {
            const {name, description, imageUrl} = req.body;

            let accessory = {
                errors: [],
            };

            if (name.trim().length === 0 || name.trim().length < 5) {
                accessory.errors.push('Name must be at least 5 characters');
            } else {
                accessory.name = name;
            }

            if (description.trim().length === 0 || description.trim().length < 20) {
                accessory.errors.push('Description must be at least 20 characters');
            } else {
                accessory.description = description;
            }

            if (!/^https?/.test(imageUrl.trim())) {
                accessory.errors.push('ImageUrl must start with http or https');
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