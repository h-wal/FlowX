import express from "express"
import type { Request, Response, Router } from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import authentication from "./middleware/auth.js"

dotenv.config()


const dashbaordRouter: Router = express.Router()

async function dashbaordRouterFunction(req: Request, res: Response){

    const userId = req.body.userId;
    res.send("Hello"+ userId)

}

dashbaordRouter.get("/", authentication, dashbaordRouterFunction)

export default dashbaordRouter