const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/mylocaldb';
const connection = mongoose.createConnection(
    mongoDB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// Bind connection to error event (to get notification of connection errors)
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
connection.on('connected', () => console.log('Connected to mongodb'));