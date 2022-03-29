import { Router, Request, Response } from "express";
import db from "../db/pg";

const dbRouter: Router = Router();

dbRouter.get("/", async (req: Request, res: Response) => {
  try {
    const connectResult = await db.connect();
    res.send({ status: "connected" });
  } catch (err) {
    console.error(err);
    res.send({ status: "error", error: err });
  }
});

export default dbRouter;
