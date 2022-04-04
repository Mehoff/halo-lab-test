import "reflect-metadata";
import { AppDataSource } from "./db/data-source";
import { reinitializeDb, disconnect } from "./db/utils";
import { redis, setupRedis } from "./redis/client";

import app from "./index";

app.listen(process.env.APP_PORT, async () => {
  console.info(`Server is listening on port ${process.env.APP_PORT}`);

  setTimeout(() => {
    console.log("Initialize db...");
    AppDataSource.initialize()
      .then(async () => {
        await reinitializeDb();
        await setupRedis();
      })
      .catch((err: Error) => {
        console.error(err);
      });
  });
});

process.on("SIGINT", async () => {
  await disconnect();
  await redis.quit();
});
