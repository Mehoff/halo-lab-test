import { Request, Response, NextFunction } from "express";
import NodeCache from "node-cache";

const cache = new NodeCache();

export function cacheMw(req: Request, res: Response, next: NextFunction) {
  if (req.method !== "GET") return next();

  const key = req.originalUrl;

  const memoryCacheResult = cache.get(key);
  if (memoryCacheResult) {
    console.log(`Found ${key} in cache`);
    res.send(memoryCacheResult);
  } else {
    console.log(`Cache not found for ${key}`);
    res.originalSend = res.send;
    //@ts-ignore
    res.send = (body) => {
      res.originalSend(body);
      cache.set(key, body);
    };
    next();
  }
}
