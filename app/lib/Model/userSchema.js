import mongoose from "mongoose";

let userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    number: Number,

})

if(mongoose.models["user"]){
    delete mongoose.models["user"]
}

export const USERMODEL = mongoose.model("user",userSchema)