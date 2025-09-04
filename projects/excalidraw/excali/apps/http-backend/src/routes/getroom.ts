import express, { Router, Request, Response } from "express"
import db from "@repo/db/client";

const {prismaClient} = db

const getRoomsRouter: Router = express.Router()

async function getRoomRouterFunction(req: Request, res: Response){

    try{
        const response = await prismaClient.room.findMany({
            select:{
                id: true,
                slug: true,
                adminId: true,
                admin: {
                    select:{
                        name: true
                    }
                }
            }
        })
        res.json(response)
    } catch(e){
        console.log("error fetching data from db")
        res.send({
            message : "error fetching data from db"
        })
    }
    
}

getRoomsRouter.get("/", getRoomRouterFunction)

export default getRoomsRouter