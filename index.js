const express = require('express');
const app = express();

require('./config/express')(app);
require('./config/mongoose');

const {msg} = require('./config/constants');
const {PORT} = require('./config/config');
const routes = require('./config/routes');

app.use(routes);

app.listen(PORT, () => console.log(msg.APPLICATION_RUNNING(PORT)));
