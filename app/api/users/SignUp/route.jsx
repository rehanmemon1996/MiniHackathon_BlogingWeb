import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { ConnectLink } from "../../../lib/db";
import { USERMODEL } from "../../../lib/Model/userSchema";


export async function POST(request, content) {
    await mongoose.connect(ConnectLink).then((val) => {
        console.log("test Connect")
    })

    let data = await request.json()
    console.log(data)
    let checkuser = await USERMODEL.findOne({ email: data.email })
    console.log(checkuser)
    if (checkuser != null) {
        return NextResponse.json({
            message: "Already Register"
        })
    }
    else {
        let res = USERMODEL(data)
        await res.save()
        return NextResponse.json({
            message: "User Registered",
            data: res
        })
    }
}

export async function GET(){
    console.log(ConnectLink)

    // let res = request.json()
    // console.log(res)


    return NextResponse.json({
        message: "Api check",
        data: []
    })
}
