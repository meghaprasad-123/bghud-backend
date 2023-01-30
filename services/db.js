const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/B-GHUD',
{
   useNewUrlParser:true
});

const User = mongoose.model('User',
{
    username:String,
    mail:String,
    number:Number,
    password:String,
    qualification:String,
    place:String,
    course:String,
    mode:String
});




module.exports={
    User
    
}