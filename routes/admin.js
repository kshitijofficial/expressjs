const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/add-course", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "files", "add-course.html"));
});

router.post("/add-course", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
