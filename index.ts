import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/ping", (req, res) => {
  res.send("Pong!");
});

app.listen(process.env.PORT, () => {
  console.info(`Server is listening on port ${process.env.PORT}`);
});
