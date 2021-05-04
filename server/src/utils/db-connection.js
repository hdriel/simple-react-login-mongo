const mongoose = require('mongoose');

module.exports = async function (mongodbURI = 'mongodb://localhost/my-database'){
    mongoose.connect(
        mongodbURI,
        {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );

    mongoose.connection.on('error', console.error.bind(console, 'connection to mongodb failed with error:'))
    mongoose.connection.on('open', console.log.bind(console, 'mongodb connection established successfully'))
}

