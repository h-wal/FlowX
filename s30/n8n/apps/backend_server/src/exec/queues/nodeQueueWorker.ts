import { Queue, Worker, Job } from 'bullmq';
import { connection } from './redis.js';
import { EmailFunction } from '../services/email.js';

export const nodeQueue = new Queue('workflowNodeQueue', { connection });


export const nodeWorker = new Worker(
  'workflowNodeQueue',
  async (job: Job) => {
    console.log('Processing node job:', job.name);

    let result: {
        success: boolean,
        message?: string,
        error?: string
    };

    switch(job.data.type){
      case "emailNode":
        EmailFunction()
        console.log(job.data)
        break;

      case "manualTrigger":
        result=({success: true, message: "TriggerPressed"})
        break;
      
      default:
        console.log("node type not supported yet :( ", job.name, job.data)
        throw new Error(`Unsupported node type: ${job.data.type}`);
    }

    console.log('Finished node job:', job.name);
    return { status: 'done' };

  },
  { connection }
);
