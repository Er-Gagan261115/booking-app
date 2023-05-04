const mongoose = require('mongoose');
const userschemas = new mongoose.Schema({
    name:String,
    dob:Date,
    email:String,
    password:String
});
module.exports = mongoose.model('users',userschemas);