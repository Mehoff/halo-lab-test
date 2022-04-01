import "reflect-metadata";
import { AppDataSource } from "./db/data-source";
import { populateDb } from "./db/utils";
import app from "./index";

app.listen(process.env.APP_PORT, async () => {
  console.info(`Server is listening on port ${process.env.APP_PORT}`);

  setTimeout(() => {
    console.log("Initialize db...");
    AppDataSource.initialize()
      .then(async () => {
        console.log("Populating db...");
        await populateDb();
      })
      .catch((err: Error) => {
        console.error(err);
      });
  });
});
