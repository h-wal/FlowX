import express, {Router} from "express"
import type { Request, Response } from "express"
import { prismaClient } from "@repo/db/client"

const excecutionRouter: Router = express.Router()

async function excecuteRouterFunction(req: Request, res: Response){

    const workFlowId = req.body.workFlowId
    const workFlow = await prismaClient.workflow.findFirst({
        where:{
            id: workFlowId
        }
    })

    if(workFlow?.flow){
        const workFlowObject: {nodes: object[], edges: object[]} = JSON.parse(workFlow.flow)
        const edges = workFlowObject.edges
        const nodes = workFlowObject.nodes

        console.log(nodes, edges)
        
    } else{
        res.status(401).send("Error Excecuting Flow Please Try Agagin")
    }
}

excecutionRouter.post("/", excecuteRouterFunction)

export default excecutionRouter