import express from "express";

const router = express.Router();

//TODO LOGIN - get
router.get("/", (req, res) => {
  const query = req.query;

  if (query.user === "test") {
    res.send("test user log in successfull");
    return;
  }
  res.status(401).send("log in failed");
});

//TODO REGISTRATION - post

//TODO AUTHENTICATION - get

//testing end point
router.get("/test", (req, res) => {
  res.send("Test successful you have reached the endpoint");
});

export default router;
