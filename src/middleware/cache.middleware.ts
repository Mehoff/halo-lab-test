import { Request, Response, NextFunction } from "express";
import NodeCache from "node-cache";

const cache = new NodeCache();

//Todo: redis cache

export const cacheMw = (req: Request, res: Response, next: NextFunction) => {
  if (req.method !== "GET") return next();

  const key = req.originalUrl;

  const memoryCacheResult = cache.get(key);
  if (memoryCacheResult) {
    return res.send(memoryCacheResult);
  } else {
    res._send = res.send;
    res.send = (body): Response<any, Record<string, any>> => {
      cache.set(key, body);
      return res._send(body);
    };
  }

  next();
};
