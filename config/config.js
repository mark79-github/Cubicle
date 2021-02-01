const {username, password, db} = require('./credentials.js');

const config = {
    development: {
        PORT: 3000,
        DB: `mongodb://127.0.0.1/${db}`,
    },
    production: {
        PORT: 80,
        DB: `mongodb+srv://${username}:${password}@cluster0.nbulj.mongodb.net/${db}?retryWrites=true&w=majority`,
    }
}

module.exports = config[process.env.NODE_ENV.trim()];
