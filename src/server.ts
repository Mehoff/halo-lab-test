import app from "./index";

app.listen(process.env.PORT, () => {
  console.info(`Server is listening on port ${process.env.PORT}`);
});
