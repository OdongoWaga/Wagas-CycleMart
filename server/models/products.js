const mongoose =require('mongoose');
const Schema =  mongoose.Schema;

const productSchema = mongoose.Schema({
    name:{
        required:true,
        type:String,
        unique: 1,
        maxlength: 255
    },
    description: {
        required: true,
        type:String,
        unique: 1,
        maxlength: 255
    },
    price:{
        required: true,
        type: Number,
        maxlength:255
    },
    brand: {
        type: Schema.Types.ObjectId, 
        ref: 'Brand',
        required: true
    },
    shipping: {
        required: true,
        type: Boolean
    },
    available:{
        required: true,
        type: Boolean
    },
    tyres: {
        type: Schema.Types.ObjectId, 
        ref: 'Tyres',
        required: true
    },
    wheelSpoke: {
        required: true, 
        type: Number
    },
    sold:{
        type:Number, 
        maxlength:255, 
        default: 0
    },
    publish: {
        required: true,
        type: Boolean
    },
    images: {
        type: Array,
        default:[]
    }
}, {timestamps:true});

const Product = mongoose.model('Product', productSchema);

module.exports ={Product}