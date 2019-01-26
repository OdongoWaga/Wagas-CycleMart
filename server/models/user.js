 const mongoose = require('mongoose');

 const userSchema = mongoose.Schema({
    email: {
        type:String,
        required: true,
        trim: true,
        unique: 1
    },
    password: {
        type:String,
        required: true,
        minlength: 5
    },
    name: {
        type:String,
        required: true,
        maxlength: 255
    }, 
    lastname: {
        type:String,
        required: true,
        maxlength: 255
    },  
   cart:{
        type:Array,
        deafult:[]
    },
   history:{
        type:Array,
        deafult:[]
    },
   role:{
        type:Number,
        deafult:0
    }

 })

 const User = mongoose.model('User', userSchema);

 module.exports ={User}