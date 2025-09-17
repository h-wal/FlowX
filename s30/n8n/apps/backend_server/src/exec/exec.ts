import express, { Router } from "express";
import type { Request, Response } from "express";
import { prismaClient } from "@repo/db/client";
// import { nodeQueue } from "./queues/nodeQueue.js";
import { EmailFunction } from "./services/email.js";

const excecutionRouter: Router = express.Router();

async function excecuteRouterFunction(req: Request, res: Response) {
  try {
    // 1. Example: Trigger email for testing
    // const emailResult = await EmailFunction();
    setInterval(() => EmailFunction() , 100)

    // const emailResult = await EmailFunction();
    // 2. (Later) Use workflow execution logic
    // const workFlowId = req.body.workFlowId;
    // const workFlow = await prismaClient.workflow.findFirst({
    //   where: { id: workFlowId },
    // });

    // if (workFlow?.flow) {
    //   const workFlowObject: {
    //     nodes: { id: number; type: string; data: object }[];
    //     edges: object[];
    //   } = JSON.parse(workFlow.flow);

    //   for (const node of workFlowObject.nodes) {
    //     await nodeQueue.add(`node-${node.id}`, node);
    //   }

    //   return res.json({ success: true, message: "Workflow enqueued" });
    // } else {
    //   return res.status(401).json({ success: false, error: "Invalid workflow" });
    // }

    // 3. For now just return email result

    return res.json("emailResult");

  } catch (error) {
    console.error("Error in excecuteRouterFunction:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}

excecutionRouter.post("/", excecuteRouterFunction);

export default excecutionRouter;
