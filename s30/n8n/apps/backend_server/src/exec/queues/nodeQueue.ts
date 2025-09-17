// import { Queue, Worker, Job } from 'bullmq';
// import { connection } from './redis.js';
// import { EmailFunction } from '../services/email.js';

// export const nodeQueue = new Queue('workflow-node-queue', { connection });


// export const nodeWorker = new Worker(
//   'workflow-node-queue',
//   async (job: Job) => {
//     console.log('Processing node job:', job.name, job.data);

//     let result;

//     switch(job.data.type){
//       case "emailNode":
//         result = await EmailFunction({ body: job.data.data})
//         break;
      
//       default:
//         console.log("node type not supported yet :( ", job.name, job.data)
//         throw new Error(`Unsupported node type: ${job.data.type}`);
//     }

//     console.log('Finished node job:', job.name);
//     return { status: 'done' };

//   },
//   { connection }
// );
