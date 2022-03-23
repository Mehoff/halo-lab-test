import express from "express";
import dotenv from "dotenv";

import pingRouter from "./routes/ping";

dotenv.config();

const app = express();

app.use(pingRouter);

export default app;