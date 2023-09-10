import mongoose from "mongoose";
import { NextResponse } from "next/server";
import {ConnectLink} from '../lib/db'

export async function POST(){
    mongoose.connect(ConnectLink).then((rep)=>{
        console.log('connected')
    })
    


    

    return NextResponse.json({
        message:"get data"
    })
}