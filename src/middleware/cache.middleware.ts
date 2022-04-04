import { Request, Response, NextFunction } from "express";

import NodeCache from "node-cache";
import { redis } from "../redis/client";

const cache = new NodeCache({ stdTTL: 10 });

export async function cacheMw(req: Request, res: Response, next: NextFunction) {
  if (req.method !== "GET") return next();

  res.originalSend = res.send;
  //@ts-ignore
  res.send = async (body) => {
    res.originalSend(body);
    cache.set(key, body);
    await redis.setEx(key, 30, JSON.stringify(body));
  };

  const key = req.originalUrl;

  const memoryCacheResult = cache.get(key);
  if (memoryCacheResult) {
    console.info(`Found ${key} in INMEMORY cache`);
    res.send(memoryCacheResult);
    return;
  }

  const redisCacheResult = await redis.get(key);
  if (redisCacheResult) {
    console.info(`Found ${key} in REDIS cache`);
    res.send(JSON.parse(redisCacheResult));
    return;
  } else {
    console.info(`Cache not found for ${key}`);
    next();
  }
}
