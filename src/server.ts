import "reflect-metadata";
import { AppDataSource } from "./db/data-source";
import { populateDb } from "./db/utils";
import app from "./index";

console.log("Hello world");

app.listen(process.env.APP_PORT, async () => {
  console.info(`Server is listening on port ${process.env.APP_PORT}`);

  AppDataSource.initialize()
    .then(async () => {
      await populateDb();
    })
    .catch((err: Error) => {
      console.error(err);
    });
});
