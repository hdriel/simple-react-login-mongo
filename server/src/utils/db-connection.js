const mongoose = require('mongoose');

module.exports = async function (mongodbURI = 'mongodb://localhost/my-database'){
    await mongoose.connect(
        mongodbURI,
        {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );

    mongoose.connection.on('error', console.error.bind(console, 'connection to mongo failed with error:'))
}

