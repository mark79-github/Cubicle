const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const {auth} = require('../middlewares');

module.exports = (app) => {
    app.engine('hbs', handlebars({extname: 'hbs'})); // template-engine
    app.set('view engine', 'hbs'); // view-engine
    app.use(express.static('static')); // static folder
    app.use(express.urlencoded({extended: true})); // body-parser
    app.use(cookieParser()); //cookie-parser
    app.use(auth()); // authentication middleware
    app.use((error, req, res, next) => {
        return res.status(500).json({ message: error.message });
    }); // error-handler
};