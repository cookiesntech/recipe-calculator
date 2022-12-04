const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.DB_STRING, {
            useUnifiedTopology: true
        });
        console.log("We've got ourselves a database!");
    } catch(err) {
        console.error(err);
    }
}

module.exports = connectDB;