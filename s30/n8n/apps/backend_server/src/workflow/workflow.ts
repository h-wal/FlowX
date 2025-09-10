import express from "express"
import type { Request, Response, Router } from "express"

const workFlowRouter: Router = express.Router()

async function workFlowRouterFunction(req: Request, res: Response){
    
}

workFlowRouter.post("/", workFlowRouterFunction)
export default workFlowRouter

