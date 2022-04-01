import { Request, Response, NextFunction } from "express";
import NodeCache from "node-cache";

const cache = new NodeCache();

// Todo:
// redis cache
// fix:'ERR_HTTP_HEADERS_SENT'

export const cacheMw = (req: Request, res: Response, next: NextFunction) => {
  if (req.method !== "GET") return next();

  const key = req.originalUrl;

  const memoryCacheResult = cache.get(key);
  if (memoryCacheResult) {
    return res.send(memoryCacheResult);
  } else {
    res._send = res.send;
    //@ts-ignore
    res.send = (body: any) => {
      res._send(body);
      cache.set(key, body);
    };
  }
  next();
};
