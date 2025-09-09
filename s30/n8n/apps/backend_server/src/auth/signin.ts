import express from "express"
import type  {Request, Response, Router} from "express"
import { prismaClient } from "@repo/db/client"
import bcrypt, { hash } from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const signUpRouter: Router = express.Router()

async function signUpRouterFunction(req: Request, res: Response){
    
    const email = req.body.email;
    const password = req.body.password;
    
    const foundUser = await prismaClient.user.findUnique({
        where:{
            email: email
        }
    })

    console.log(foundUser)

    if (foundUser){

        let auth;

        try{
            console.log(foundUser)
            const hash = foundUser.password
            const password = req.body.password;

            auth = await bcrypt.compare(password, hash)

        } catch(e){
            res.send("Error comparing password" + e)
        }

        if(auth){
            try{
                const token = jwt.sign(foundUser.id, process.env.JWT_KEY as string)
                console.log(token)
                res.cookie("token", token).json({
                    token:token
                })
                
            } catch(e){
                res.send("error creating token" + e)
            } 
        }

        else{
            res.json({
                message: "Invalid Password"
            })
        }
    }

    else{
        res.json({
            message: "Kindly SignUp"
        })
    }
}

signUpRouter.post("/", signUpRouterFunction)

export default signUpRouter