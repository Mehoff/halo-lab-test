import express from "express";

import { categoriesRouter } from "./routers/categories.router";
import { filmsRouter } from "./routers/films.router";
import { measureRequestDuration } from "./middleware/responseTime.middleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(measureRequestDuration);

app.use("/categories", categoriesRouter);
app.use("/films", filmsRouter);

export default app;
