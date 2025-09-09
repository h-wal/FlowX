import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export default function authentication (req: Request, res: Response, next: NextFunction){

    const token = req.cookies.token
    // console.log(token)

    const userId = jwt.verify(token, process.env.JWT_KEY as string)
    // console.log(userId)

    if(userId){
        req.body.userId = userId
        next()
    } 

    else{
        res.json({
            message: "Cookie Expired Kidnly Relogin"
        })
    }
    

}