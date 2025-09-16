import express, {Router} from "express"
import type { Request, Response } from "express"
import { prismaClient } from "@repo/db/client"
import { nodeQueue } from "./queues/nodeQueue.js"

const excecutionRouter: Router = express.Router()

async function excecuteRouterFunction(req: Request, res: Response){

    const workFlowId = req.body.workFlowId
    const workFlow = await prismaClient.workflow.findFirst({
        where:{
            id: workFlowId
        }
    })

    if(workFlow?.flow){
        const workFlowObject: {nodes: {id: number, type: string, data: object}[], edges: object[]} = JSON.parse(workFlow.flow)
        const edges = workFlowObject.edges
        const nodes = workFlowObject.nodes

        for (const node of nodes) {
            await nodeQueue.add(`node-${node.id}`, node);
        }
        
    } else{
        res.status(401).send("Error Excecuting Flow Please Try Agagin")
    }
}

excecutionRouter.post("/", excecuteRouterFunction)

export default excecutionRouter