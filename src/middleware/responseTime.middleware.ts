import { Request, Response, NextFunction } from "express";

export const measureRequestDuration = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const start = Date.now();
  res.once("finish", () => {
    const duration = Date.now() - start;
    console.log(`[${req.method}] ${req.originalUrl} : ${duration}ms`);
  });
  next();
};
