import express from "express";
import usersRouter from "./users.js";

const app = express();
const port = 4040;

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log("Server is listening on port", port);
});
