import express from "express"
import type {Request, Response, Router} from "express"
import authentication  from "../middleware/auth.js"
import { prismaClient } from "@repo/db/client"

const credentialsRouter: Router = express.Router()

async function credentialsRouterPostFunction(req: any, res: Response){

    const userId = req.user.id
    const type = req.body.type
    const credential = req.body.credentials

    try{
        const response = await prismaClient.credentials.create({
            data:{
                type: type,
                credential: credential,
                userId: userId
            }
        })

        if(response){
        res.status(200).send(response)
        } 
    } catch(e){
        res.status(401).send("Error Uplaoding Credentials"+ e)
    }
}

async function credentialsRouterGetFunction(req: any, res: Response){
    
    const userId = req.user.id

    try{
        const response = await prismaClient.credentials.findMany({
            where:{
                userId: userId
            }
        })

        if(response){
            res.status(200).send(response)
        }
    } catch(e){
        res.status(401).send("Error fetching data"+e)
    }
        

    
}

credentialsRouter.post("/", authentication, credentialsRouterPostFunction)
credentialsRouter.get("/", authentication, credentialsRouterGetFunction)
export default credentialsRouter