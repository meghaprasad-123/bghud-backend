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
    password:String
});

const Profile = mongoose.model('Profile',
{
    username:String,
    mail:String,
    qualification:String,
    number:Number,
    place:String,
    course:String,
    mode:String
});

module.exports={
    User,Profile
}