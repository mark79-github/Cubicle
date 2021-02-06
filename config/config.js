const {username, password, db} = require('./credentials.js');

const config = {
    development: {
        PORT: 3000,
        DB: `mongodb://127.0.0.1/${db}`,
        saltRounds: 10,
        authCookie: 'jwt-auth-cookie'
    },
    production: {
        PORT: 80,
        DB: `mongodb+srv://${username}:${password}@cluster0.nbulj.mongodb.net/${db}?retryWrites=true&w=majority`,
        saltRounds: 7,
        authCookie: 'app-id'
    }
}

module.exports = config[process.env.NODE_ENV.trim()];
