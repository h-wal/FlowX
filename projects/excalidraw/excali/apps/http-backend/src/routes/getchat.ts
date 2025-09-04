import express, { Router , Request, Response} from "express";
import db from "@repo/db/client";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const {prismaClient} = db;

const getChatRouter: Router = express.Router();

async function getChatsRouterfunction(req: Request, res: Response){
    console.log("got request")
    const roomId = req.body.roomId as number;
    const message = await prismaClient.chat.findMany({
        where:{
            roomId: roomId
        },
        include:{
            user:{
                select:{
                    name: true
                }
            }
        },
        orderBy:{
            id: "desc"
        },
        take: 50
    });

    res.json({message})
}

getChatRouter.post("/", getChatsRouterfunction)

export default getChatRouter