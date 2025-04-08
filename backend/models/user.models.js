import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    uploader:[{
        type:String
    }]
},{timestamps:true});

export const userModel = mongoose.model("User",userSchema);