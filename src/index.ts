import express from "express";
import dotenv from "dotenv";

import { categoriesRouter } from "./routers/categories.router";
import { filmsRouter } from "./routers/films.router";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/categories", categoriesRouter);
app.use("/films", filmsRouter);

export default app;
