import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();

import { AppDataSource } from "./db/data-source";
import { reinitializeDb, disconnect } from "./db/utils";
import { redis, setupRedis } from "./redis/redisClient";

import app from "./index";

app.listen(process.env.APP_PORT, async () => {
  console.info(`Server is listening on port ${process.env.APP_PORT}`);

  let retries = 5;
  while (retries) {
    try {
      await AppDataSource.initialize();
      await reinitializeDb();
      await setupRedis();
      break;
    } catch (err) {
      retries -= 1;
      console.error(err, `\n > Retries left: ${retries}`);
      await new Promise((res) => setTimeout(res, 5 * 1000));
    }
  }
  if (!retries) process.exit(1);
});

process.on("SIGINT", async () => {
  await disconnect();
  await redis.quit();
});
