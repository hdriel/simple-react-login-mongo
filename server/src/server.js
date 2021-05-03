const express = require('express');
const bodyParser= require('body-parser')
const path = require('path');
const crossOrigin = require('./middlware/crossOriginMW');
const mainRoute = require('./routes');
const authRoute = require('./routes/auth');
require('./utils/db-connection');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../../client/build')));
app.use(crossOrigin);

// Routes
app.use('/', mainRoute);
app.use('/auth', authRoute);


app.listen(4000, function() {
    console.log('listening on http://localhost:4000');
})