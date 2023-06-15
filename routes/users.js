import express from "express";

import { registerUser, validateUser } from "../db/database.js";

const router = express.Router();

//LOGIN request - post
router.post("/login", (req, res) => {
  console.log("users/login POST Request: ", req.body);

  try {
    if (validateUser(req.body)) {
      req.session.username = req.body.username;
      console.log("Session created", req.session);
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ error: "Login failed" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

//Check session data
router.get("/logged", (req, res) => {
  console.log(
    "users/session GET Request. Has session?",
    req.session.username ? true : false,
    "\n",
    req.session
  );

  try {
    if (req.session.username) {
      res.status(200).json({ Logged: true, session: req.session });
    } else {
      res.status(200).json({ Logged: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

//Logout
router.get("/logout", (req, res) => {
  console.log("users/logout GET Request");
  try {
    if (req.session.username) {
      req.session.destroy();
      res.clearCookie("sessionCookie");
    }
    res.status(200).json({ message: "Logged out" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

//REGISTRATION - post
router.post("/register", (req, res) => {
  console.log("users/register POST Request: ", req.body);

  try {
    const registerResponse = registerUser(req.body);
    if (registerResponse) {
      res.status(201).json(registerResponse);
    } else {
      res.status(409).json({ error: "User already exists." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

//testing end point
router.get("/test", (req, res) => {
  res
    .status(200)
    .json({ message: "Test successful you have reached the endpoint" });
});

export default router;
