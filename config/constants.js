module.exports = {
    constants: {
        USERNAME_MIN_LENGTH: 5,
        PASSWORD_MIN_LENGTH: 8,
        USERNAME_REGEX: /^[A-Za-z0-9]+$/,
        PASSWORD_REGEX: /^[A-Za-z0-9]+$/,
        NAME_MIN_LENGTH: 5,
        DESCRIPTION_MIN_LENGTH: 20,
        IMAGE_URL_REGEX: /^https?/,
        DIFFICULTY_LEVEL_MIN: 1,
        DIFFICULTY_LEVEL_MAX: 6,
    },
    msg: {
        USERNAME_MIN_LENGTH: "Username length must be at least 5 characters",
        USERNAME_ONLY_ALPHABETICAL: "Username must contains only digits and/or latin letters",
        PASSWORD_MIN_LENGTH: "Password length must be at least 8 characters",
        CONFIRMATION_PASSWORD_ERROR: "Your password and confirmation password do not match",
        PASSWORD_ONLY_ALPHABETICAL: "Password must contains only digits and/or latin letters",
        NAME_MIN_LENGTH: "Name must be at least 5 characters",
        DESCRIPTION_MIN_LENGTH: "Description must be at least 20 characters",
        IMAGE_URL_STARTS_WITH: "ImageUrl must start with http or https",
        DIFFICULTY_RANGE: "Difficulty level must be between 1 and 6",
        WRONG_CREDENTIALS: "Wrong username and/or password",
        USERNAME_IS_IN_USE: (username) => {
            return `Username ${username} is already taken ...`
        },
        DB_CONNECTED: (host, name) => {
            return `Successfully connected to ${host} : db -> ${name}`
        },
        DB_CONNECTION_ERROR: "Connection error: ",
        APPLICATION_RUNNING: (port) => {
            return `Application is up & listening on port ${port} ...`;
        }
    }
}
