module.exports = {
    user: {
        register(req, res, next) {
            const {username, password, repeatPassword} = req.body;

            let errors = [];

            if (username.trim().length === 0 || username.trim().length < 5) {
                errors.push('Username length must be at least 5 characters');
            }

            if (password.trim().length === 0 || password.trim().length < 8) {
                errors.push('Password length must be at least 8 characters');
            }

            if (password.trim() !== repeatPassword.trim()) {
                errors.push('Both passwords are not equal');
            }

            if (!/^[A-Za-z0-9]+$/.test(username.trim())) {
                errors.push('Username must contains only digits and/or latin letters');
            }

            if (!/^[A-Za-z0-9]+$/.test(password.trim())) {
                errors.push('Password must contains only digits and/or latin letters');
            }

            if (!errors.length) {
                next();
                return;
            }
            res.render('users/register', {message: errors.shift(), username});

        },
        login(req, res, next) {
            const {username, password} = req.body;

            let errors = [];

            if (username.trim().length === 0 || username.trim().length < 5) {
                errors.push('Username must be at least 5 characters');
            }

            if (password.trim().length === 0 || password.trim().length < 8) {
                errors.push('Password length must be at least 8 characters');
            }

            if (!errors.length) {
                next();
                return;
            }
            res.render('users/login', {message: errors.shift(), username})
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

            res.render('products/edit', {product, message: product.errors.shift()});
        }
    },
    accessory: {
        create(req, res, next) {
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

            res.render('accessories/create', {message: errors.shift(), ...accessory});

        }
    }
}