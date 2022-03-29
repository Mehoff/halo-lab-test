import app from "./index";
import db from "./db/pg";

app.listen(process.env.APP_PORT, async () => {
  console.info(`Server is listening on port ${process.env.APP_PORT}`);
  db.query("SELECT NOW()", (err, res) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(res);
    db.end();
  });
});
