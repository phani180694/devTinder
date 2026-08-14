const express = require("express");

const app = express();

const { adminAuth } = require("./middlewares/auth");

//Handle Auth middleware for all GET, POST,.... requests
app.use("/admin", adminAuth);

app.get("/user", (req, res) => {
  res.send("User data sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
