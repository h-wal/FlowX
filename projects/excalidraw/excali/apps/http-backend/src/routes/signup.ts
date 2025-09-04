import express, { Router, Request, Response} from "express"
import db from "@repo/db/client";
const {prismaClient} = db;
import dotenv from "dotenv"

const signUpRouter: Router = express.Router();

async function signUpRouterFunction(req: Request, res: Response){

    //add zod validation here
    const parsedData = req.body;

    if (!parsedData){
        res.status(400).send("Invalid Request")
        return;
    }
    
    const username = parsedData.username;
    const password = parsedData.password;
    const email = parsedData.email;

    try{
        const userCreated = await prismaClient.user.create({
            //ts-ignore
            data:{
                email: email,
                name: username,
                password: password
            }
        })
    } catch(e){
        res.status(403).send("eror"+e)
    }

    res.status(200).send("User Created Successfully")
}

async function adminsignUpRouterFunction(req: Request,res: Response){
    
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;


}

signUpRouter.post("/admin", adminsignUpRouterFunction)
signUpRouter.post("/", signUpRouterFunction)


export default signUpRouter