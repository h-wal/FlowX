import express, {Router, Request, Response}from "express"
import db from "@repo/db/client"

const {prismaClient} = db

const getUserIdRouter: Router = express.Router()

async function getUserIdRouterFunction(req: Request, res: Response){

    const userName = req.body.userName;
    const userEmail = req.body.userEmail;

    const user = await prismaClient.user.findFirst({
        where:{
            OR:[
                {name: userName},
                {email: userEmail}
            ]       
        }
    })

    res.send(user)
}

getUserIdRouter.post("/", getUserIdRouterFunction)

export default getUserIdRouter
