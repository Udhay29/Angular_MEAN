const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meanDB', { useNewUrlParser: true }, (err) => {
    if(!err) {
        console.log('Mongodb connection succeeded...')
    } else {
        console.log(`Error in DB: ${JSON.stringify(err, undefined, 2)}`);
    }
});

module.exports = mongoose;