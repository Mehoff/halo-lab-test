import { Router, Request, Response } from "express";

const pingRouter: Router = Router();

pingRouter.get("/ping", async (req: Request, res: Response) => {
  res.send("pong");
});

export default pingRouter;
