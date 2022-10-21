const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express(); //request handler
const adminRoutes = require("./routes/admin");
const courseRoutes = require("./routes/course");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(courseRoutes);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "files", "error.html"));
});
app.listen(3000);
