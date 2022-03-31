const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ecom_api');
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in running the server"));
db.once('open', function(){
    console.log('Connected with database: mongodb');
});
module.exports = db;