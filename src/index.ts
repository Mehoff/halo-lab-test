import express from "express";
import dotenv from "dotenv";
import NodeCache from "node-cache";

import { categoriesRouter } from "./routers/categories.router";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/categories", categoriesRouter);

export default app;
