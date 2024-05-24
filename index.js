const express = require("express");
const app = express();
const devenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const dbconnect = require("./config/dbconnect");
const authRoute = require("./routes/authRoute");

// for mongo connect
dbconnect();

// for reg

app.use("/api/user", authRoute);

// for the root
app.use("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is runing at port ${PORT}`);
});
