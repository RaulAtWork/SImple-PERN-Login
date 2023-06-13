import express from "express";

import { validateUser } from "../db/database.js";

const router = express.Router();

//LOGIN request - post
router.post("/login", (req, res) => {
  console.log("users/login POST Request: ", req.body);

  if (validateUser(req.body)) {
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
