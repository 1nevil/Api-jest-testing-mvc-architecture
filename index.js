const express = require("express");
const app = express();
const mongoose = require("mongoose");
// require("./config/dev.env").config();
const helmet = require("helmet");

//database connction
app.use(express.json());

//for hide the servername which library use
app.use(helmet());

//nodejs security best prectices
//https://blog.sqreen.com/nodejs-security-best-practices/

mongoose
  .connect(process.env.mongodbUrl)
  .then(console.log("Database connection successfully"))
  .catch((error) => console.log(error));

app.use("/users", require("./routes/userRouter"));

app.get("/", (req, res) => {
  res.send("home route from the server");
});

module.exports = app;
