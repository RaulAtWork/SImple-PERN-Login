import express from "express";
import usersRouter from "./routes/users.js";
import cors from "cors";
import session from "express-session";
import bodyParser from "body-parser";
import dotenv from "dotenv";

//We create the express server adn set up config
const app = express();
const port = process.env.PORT || 4040;
const store = new session.MemoryStore();
dotenv.config();

//decode using json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configuration of the Cross Origin Resource Sharing. This enables requests from our localhost
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST"],
    credentials: true,
  })
);

//configure the session
app.use(
  session({
    secret: process.env.SECRET_KEY,
    cookie: { maxAge: 1000 * 60 * 10 }, //10 min
    saveUninitialized: false,
    resave: false,
    store,
  })
);

//add the routes we have under ./routes
app.use("/users", usersRouter);

//start the server on the desired port
app.listen(port, () => {
  console.log("Server is listening on port", port);
});
