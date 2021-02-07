const mongoose = require('mongoose');
const config = require('./config');

// # 1
// mongoose.connect(config.DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// })
//     .then(r => JSON.parse(r))
//     .catch(console.log);
//
// const db = mongoose.connection;
//
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     console.log('db connected ...');
// });

// # 2
mongoose.connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then((res) => console.log(`Successfully connected to ${res.connections[0].host} : db -> ${res.connections[0].name}`))
    .catch(console.warn.bind(console, 'Connection error:'));

// # 3
// mongoose.connect(config.DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// })
// mongoose.connection
//     .on('error', console.warn.bind(console, 'connection error:'))
//     .once('open', console.log.bind(console, 'db connected ...'));

module.exports = mongoose.connection;