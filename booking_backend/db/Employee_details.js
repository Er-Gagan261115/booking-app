const mongoose = require('mongoose');
const Employeeschemas = new mongoose.Schema({
    name:String,
    designation:String,
    lastcompany:String,
    experience:Number,
    email:String,
    image:String
    
});
module.exports = mongoose.model('portfolio_pages',Employeeschemas);