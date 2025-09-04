import  express, {Router, Request, Response} from "express";
import db from "@repo/db/client"
import { Prisma } from "@prisma/client"

const {prismaClient} = db

const addChatRouter: Router = express.Router()

async function addChatRouterFunction(req: Request, res: Response){
    const chat = req.body.chat as string
    const roomId = req.body.roomId as number
    const userId = req.body.userId as string

    try{
        const response = await prismaClient.chat.create({
        data: {
            message: chat,
            userId: userId,
            roomId: roomId
        }
        })

        console.log(response)
        res.json(response)
    } catch (e){
        res.json({
            "message": "error fetching data" + e
        })
    }
}

addChatRouter.post("/", addChatRouterFunction)

export default addChatRouter