import app from "./index";
import db from "./db/pg";

app.listen(process.env.APP_PORT, async () => {
  console.info(`Server is listening on port ${process.env.APP_PORT}`);

  console.log("Hello from updated server.ts asdasdasdasdasd");
});
