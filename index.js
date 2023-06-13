import express from "express";
import usersRouter from "./routes/users.js";

import cors from "cors";

const app = express();
const port = process.env.PORT || 4040;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST"],
    credentials: true,
  })
);

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log("Server is listening on port", port);
});
