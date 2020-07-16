//to create schema
const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    isDone:{
        type:Boolean,
        required:true,
    }
});

//to name our collection ->to_do
const Todo=mongoose.model('to_do',todoSchema);
module.exports=Todo;