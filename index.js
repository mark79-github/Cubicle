const express = require('express');
const app = express();

require('./config/express')(app);
require('./config/mongoose');

const {PORT} = require('./config/config');
const routes = require('./config/routes');

app.use(routes);

app.listen(PORT, () => console.log(`Application is up & listening on port ${PORT} ...`));
