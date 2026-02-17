import { Queue } from "bullmq";
import { connection } from "./redis.js";

export const nodeQueue = new Queue("workflowNodeQueue", { connection });
