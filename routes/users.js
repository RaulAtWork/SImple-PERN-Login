import express from "express";

import { validateUser } from "../db/database.js";

const router = express.Router();

//LOGIN request - post
router.post("/login", (req, res) => {
  console.log("users/login POST Request: ", req.body);

  if (validateUser(req.body)) {
    req.session.username = req.body.username;
    console.log("Session created", req.session);
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Login failed" });
  }
});

//Check session data
router.get("/logged", (req, res) => {
  console.log(
    "users/session GET Request. Has session?",
    req.session.username ? true : false,
    req.session
  );
  if (req.session.username) {
    res.status(200).json({ Logged: true, session: req.session });
  } else {
    res.status(200).json({ Logged: false });
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
  }
});

//TODO REGISTRATION - post

//TODO AUTHENTICATION - get

//testing end point
router.get("/test", (req, res) => {
  res.send("Test successful you have reached the endpoint");
});

export default router;
