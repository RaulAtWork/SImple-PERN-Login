import express from "express";

const router = express.Router();

//TODO LOGIN - get

//TODO REGISTRATION - post

//TODO AUTHENTICATION - get

//testing end point
router.get("/test", (req, res) => {
  res.send("Test successful you have reached the endpoint");
});

export default router;
