import { Request, Response, NextFunction } from "express";

import NodeCache from "node-cache";
import { redis } from "../redis/redisClient";

const cache = new NodeCache({
  stdTTL: parseInt(process.env.INMEMORY_CACHE_TTL),
});

export async function cacheMw(req: Request, res: Response, next: NextFunction) {
  if (req.method !== "GET") return next();

  const key = req.originalUrl;

  res.originalSend = res.send;
  //@ts-ignore
  res.send = async (body) => {
    res.originalSend(body);
    cache.set(key, body);
    await redis.setEx(
      key,
      parseInt(process.env.REDIS_CACHE_TTL),
      JSON.stringify(body)
    );
  };

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
  }
  next();
}
