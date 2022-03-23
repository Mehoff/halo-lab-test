import { Router } from "express";

const pingRouter = Router();

pingRouter.get("/ping", async (req, res) => {
  res.send("pong");
});

export default pingRouter;
