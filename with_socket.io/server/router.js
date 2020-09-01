const express = require("express");
const router = express.Router();

// (PATH, CALLBACK)
router.get("/", (req, res) => {
  res.send("server is up and running");
});

// export
module.exports = router;
