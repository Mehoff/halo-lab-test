import { Request, Response, NextFunction } from "express";
import NodeCache from "node-cache";

const cache = new NodeCache();

export const cacheMw = (req: Request, res: Response, next: NextFunction) => {
  // Check if node-catce has cahched value
  // if does - res.json(...)
  // if not - next()

  // Use `originalUrl for key`
  console.log("originalUrl: ", req.originalUrl);
  console.log("baseUrl: ", req.baseUrl);
  console.log("url: ", req.url);

  const nodeCacheResult = getFromCache(req.originalUrl);
  if (nodeCacheResult) {
    return res.json(nodeCacheResult);
  }

  //Todo: redis

  next();
};

export const getFromCache = (key: string): any => {
  return cache.get(key);
};

export const setToCache = (key: string, value: any): void => {
  cache.set(key, value);
};
