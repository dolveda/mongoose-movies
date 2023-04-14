const mongoose = require('mongoose');

//connect to thee database
mongoose.connect(process.env.DATABASE_URL);

//shortcut to mongoose.connection object-special listener for connected events
const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB ${db.name} on ${db.host} port ${db.port}`);
});