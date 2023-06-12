import express from "express";
import bodyParser from "body-parser";

const users = [
  {
    username: "paco",
    password: "paco",
  },
];

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//LOGIN - post
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("users/login POST Request: ", req.body);

  if (
    users.some(
      (user) => user.username === username && user.password === password
    )
  ) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Login failed" });
  }
});

//TODO REGISTRATION - post

//TODO AUTHENTICATION - get

//testing end point
router.get("/test", (req, res) => {
  res.send("Test successful you have reached the endpoint");
});

export default router;
