import { Redis } from "ioredis";

const redisOptions = {
  maxRetriesPerRequest: null,
  enableOfflineQueue: true,
};

export const connection = process.env.REDIS_URL
  ? new Redis(process.env.REDIS_URL, redisOptions)
  : new Redis({
      host: process.env.REDIS_HOST ?? "127.0.0.1",
      port: parseInt(process.env.REDIS_PORT ?? "6379", 10),
      ...redisOptions,
    });
