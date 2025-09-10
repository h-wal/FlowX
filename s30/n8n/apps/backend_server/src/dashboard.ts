import express from "express"
import type { Request, Response, Router } from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import authentication from "./middleware/auth.js"

dotenv.config()

interface RequestwithUser{
    
}

const dashbaordRouter: Router = express.Router()

async function dashbaordRouterFunction(req: any, res: Response){

    if(req.user){
        const userId = req.user.id;
        res.json({
        user: req.user
    })

    }
    
}

dashbaordRouter.get("/", authentication, dashbaordRouterFunction)

export default dashbaordRouter