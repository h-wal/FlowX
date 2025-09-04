import express, { Router , Request, Response} from "express";
import db from "@repo/db/client";

const {prismaClient} = db

const userRouter: Router = express.Router()

async function getUsers(req: Request, res: Response){
    console.log("request received")

    try{
        const users = await prismaClient.user.findMany({
            select: {
              name: true
            }
        });

        console.log(users)
        res.json(users)
    } catch(e){
        console.log(e)
    }
}

userRouter.get("/", getUsers)

export default userRouter