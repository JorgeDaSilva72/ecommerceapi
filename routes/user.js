const router = require("express").Router();

router.get("/usertest", async (req, res) => {
  res.send("user test is ok");
});

router.post("/userposttest", async (req, res) => {
  const username = req.body.username;
  res.send("username: " + username);
  console.log(username);
});

module.exports = router;
