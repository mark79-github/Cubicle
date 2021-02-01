const express = require('express');
const handlebars = require('express-handlebars');

module.exports = (app) => {
    app.engine('hbs', handlebars({extname: 'hbs'})); // template-engine
    app.set('view engine', 'hbs'); // view-engine
    app.use(express.static('static')); // static folder
    app.use(express.urlencoded({extended: true})); // body-parser
};