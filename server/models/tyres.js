const mongoose =require('mongoose');

const tyreSchema = mongoose.Schema({
    name:{
        required:true,
        type:String,
        unique: 1,
        maxlength: 255
    }
});

const Tyre = mongoose.model('Tyre', tyreSchema);

module.exports ={Tyre}