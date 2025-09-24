import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export default function authentication (req: Request, res: Response, next: NextFunction){

    const token = req.cookies.token
    // console.log(token)

    const user = jwt.verify(token, process.env.JWT_KEY as string)
    // console.log(user)

    if(user){
        (req as any).user = user
        next()
    } 

    else{
        res.json({
            message: "Cookie Expired Kidnly Relogin"
        })
    }
    

}