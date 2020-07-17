//to create schema
const mongoose=require('mongoose');

const compSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    isDone:{
        type:Boolean,
        required:true,
    }
});

//to name our collection ->comp
const complete=mongoose.model('comp',compSchema);
module.exports=complete;