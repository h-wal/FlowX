import { Queue, Worker, Job } from 'bullmq';
import { connection } from './redis.js';
import { EmailFunction } from '../services/email.js';
import { prismaClient } from '@repo/db/client';
import SendTelegramBotMessage from '../services/telegram.js';

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

        console.log(isEmailSent)

        if(!isEmailSent){
          return { status: 'failed' };
        }

        if(isEmailSent){
          return {stutus: 'success'}
        }
        
        break;

      case "manualTrigger":
        result=({success: true, message: "TriggerPressed"})
        break;
        
      case "telegramNode":
        console.log(data)
        //@ts-ignore
        const accessToken = reqCredential?.credential?.accessToken
        const chatId = data.ChatId
        const chat = data.text

        SendTelegramBotMessage({
            accessToken,
            chatId,
            chat
        })

        result=({success: true, message: "Telegram Sent"})
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
