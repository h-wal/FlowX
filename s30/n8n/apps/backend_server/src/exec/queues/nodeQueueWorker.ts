import { Queue, Worker, Job } from 'bullmq';
import { connection } from './redis.js';
import { EmailFunction } from '../services/email.js';
import { prismaClient } from '@repo/db/client';

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

    const data = job.data.data

    const reqCredential = await prismaClient.credentials.findUnique({ 
      where:{
        title: data.selectedCredentialTitle
      }})
    
    console.log(reqCredential)

    switch(job.data.type){
      case "emailNode":
        const isEmailSent = await EmailFunction({
          to: data.toEmail as string,
          from: data.fromEmail as string,
          subject: data.subject as string,
          text: data.text as string,
          //@ts-ignore
          host: reqCredential?.credential?.host as string,
          //@ts-ignore
          authEmail: reqCredential?.credential?.email as string,
          //@ts-ignore
          authPass: reqCredential?.credential?.password as string,
          port: 587
        })
        // console.log(job.data)

        if(!isEmailSent){
          return { status: 'failed' };
        }
        
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
