import "reflect-metadata";
import app from "./index";

app.listen(process.env.APP_PORT, async () => {
  console.info(`Server is listening on port ${process.env.APP_PORT}`);
});
