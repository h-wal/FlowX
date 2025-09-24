//@ts-nocheck
import { Queue, Worker } from 'bullmq';
import { connection } from './redis.js';
import { EmailFunction } from '../services/email.js';
import { prismaClient } from '@repo/db/client';
import SendTelegramBotMessage from '../services/telegram.js';
import { aiAgent } from '../services/aiAgent/aiAgent.js';

export const nodeQueue = new Queue('workflowNodeQueue', { connection });

export const nodeWorker = new Worker(
  "workflowNodeQueue",
  async (job: any) => {
    // create DB record
    const createdJob = await prismaClient.jobs.create({
      data: {
        workflowID: job.data.workflowId,
        node: job.data,
        status: "queued",
      },
    });

    // attach DB id to job
    job.updateProgress({ dbId: createdJob.id });

    let result;

    try {
      const data = job.data.data;
      let reqCredential = null;

      if (data.selectedCredentialTitle) {
        reqCredential = await prismaClient.credentials.findUnique({
          where: { title: data.selectedCredentialTitle },
        });
        if (!reqCredential) throw new Error("Credential not found");
      }

      switch (job.data.type) {
        case "emailNode":
        try {
          const emailResponse: 
            { success: boolean; messageId: string; error?: never; } | { success: boolean; error: unknown; messageId?: never; }
           = await EmailFunction({
            to: data.toEmail,
            from: data.fromEmail,
            subject: data.subject,
            text: data.text,
            //@ts-ignore
            host: reqCredential?.credential?.host ,
            //@ts-ignore
            authEmail: reqCredential?.credential?.email,
            //@ts-ignore
            authPass: reqCredential?.credential?.password,
            port: 587,
          });

          if (!emailResponse.success) {
            //@ts-ignore
            throw new Error(emailResponse.error?.message || "Email failed to send");
          }

          result = { status: "success", message: "Email sent" };
        } catch (err) {
          throw err; // bubble up so BullMQ marks failed
        }
        break;

        case "manualTrigger":
          result = { status: "success", message: "Trigger pressed" };
          break;

        case "aiAgentNode":
          await aiAgent({ modelName: "gpt-4o", reqTools: [], prompt: data.Prompt });
          result = { status: "success", message: "AI agent ran" };
          break;

        case "telegramNode":
          SendTelegramBotMessage({
            //@ts-ignore
            accessToken: reqCredential?.credential?.accessToken,
            chatId: data.ChatId,
            chat: data.text,
          });
          result = { status: "success", message: "Telegram sent" };
          break;

        default:
          throw new Error(`Unsupported node type: ${job.data.type}`);
      }
    } catch (err) {
      // rethrow so BullMQ marks the job as failed
      throw err;
    }

    return result;
  },
  { connection }
);

// ✅ Completed event
nodeWorker.on("completed", async (job) => {
  const dbId = job.progress.dbId;
  if (!dbId) return;

  await prismaClient.jobs.update({
    where: { id: dbId },
    data: {
      status: "success",
      message: job.returnvalue?.message ?? "Completed",
    },
  });

  console.log(`✅ Job ${job.id} completed`);
});

// ❌ Failed event
nodeWorker.on("failed", async (job, err) => {
  const dbId = job.progress.dbId;
  if (!dbId) return;

  await prismaClient.jobs.update({
    where: { id: dbId },
    data: {
      status: "failed",
      message: err?.message ?? "Unknown error",
    },
  });

  console.error(`❌ Job ${job?.id} failed:`, err);
});
