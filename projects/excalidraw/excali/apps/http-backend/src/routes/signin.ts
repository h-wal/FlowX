import express, { Router , Request, Response} from "express";
import db from "@repo/db/client";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

const {prismaClient} = db;

const signInRouter: Router = express.Router();

async function signInRouterFunction(req: Request, res: Response){

    // add zod validation here
    const parsedData = req.body;
    
    const password = parsedData.password;
    const email = parsedData.email;


    try{
        const userFound = await prismaClient.user.findUnique({
            where:{
                email: email,
            }
        })

        if (!userFound){
            res.status(404).json({
                message: "User does not exist"
            })
            return
        }

        if (userFound.password === password){
            const token = jwt.sign({
                userid: userFound.id
            }, process.env.JWT_SECRET as string)
    
            res.status(200).json({
                email: userFound.email,
                password: userFound.password,
                name: userFound.name
            })
        }
        else{
            res.status(401).json({
                message: "Invalid password"
            })
        }

    } catch(e){
        res.status(500).send("eror"+e)
    }
}

signInRouter.post("/", signInRouterFunction)

export default signInRouter
