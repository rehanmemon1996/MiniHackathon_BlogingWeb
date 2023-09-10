import mongoose from "mongoose";

let BlogSchema = mongoose.Schema({
    title:String,
    description:String,
    imagelink:String,
    userid:String
    
   
})

if( mongoose.models["blog"]){
    delete  mongoose.models["blog"]

}

export const BlogModel = mongoose.model("blog",BlogSchema)