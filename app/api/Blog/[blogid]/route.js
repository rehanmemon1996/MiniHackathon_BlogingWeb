import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { ConnectLink } from '../../../lib/db'
import axios from 'axios';
import { BlogModel } from '../../../lib/Model/BlogSchema'

export async function DELETE(request, content) {

    console.log(content.params.blogid)

    await mongoose.connect(ConnectLink).then((val) => {
        console.log("test connect")
    })


    let res = await BlogModel.findOneAndDelete({ _id: content.params.blogid })


    return NextResponse.json({
        message: "test",
        res: res
    })


}

export async function PUT(request, content) {
    let data = await request.json()
    let id = content.params.blogid
    
    await mongoose.connect(ConnectLink).then((val) => {
        console.log("test connect")
    })
    const { blogid } = params; // Assuming params contains the blogid

    if (!blogid) {
        // Handle the error, e.g., display an error message or return early
        console.error("Invalid blogid:", blogid);
        return;
      }
    let ID = { _id: id }
    let dataforPut = await BlogModel.findOneAndUpdate(ID, data)
    return NextResponse.json({
        data: dataforPut,
        status: true
    })
}

export async function GET() {

    await mongoose.connect(ConnectLink).then((val) => {
        console.log("test connect")
    })

    let res = await BlogModel.find({})

    return NextResponse.json({
        data: res,
        message: "GET aLL RES"
    })

}