import express, { Router } from "express";
import type { Request, Response } from "express";
import { prismaClient } from "@repo/db/client";
import { nodeQueue } from "./queues/nodeQueueWorker.js";
import { EmailFunction } from "./services/email.js";

const excecutionRouter: Router = express.Router();

let counter = 1;
async function excecuteRouterFunction(req: Request, res: Response) {
  try {

    console.log("recevied req " , counter)
    counter ++
    const workFlowId = req.body.workFlowId; 

    const workFlow = await prismaClient.workflow.findFirst({
      where: { id: workFlowId },
    });

    console.log(workFlow)

    if (workFlow?.flow) {
      const workFlowObject: {
        nodes: { id: number; type: string; data: object }[];
        edges: object[];
      } = JSON.parse(workFlow.flow);

      for (const node of workFlowObject.nodes) {
        await nodeQueue.add(`node-${node.id}`, node);
        console.log(`added ${node.id} to queue`)
      }

      console.log("queue addition complete")

      return res.json({ success: true, message: "Workflow enqueued" });

    } else {

      return res.status(401).json({ success: false, error: "Invalid workflow" });
      
    }

  } catch (error) {
    console.error("Error in excecuteRouterFunction:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}

excecutionRouter.post("/", excecuteRouterFunction);

export default excecutionRouter;
