const express = require("express");

const app = express();

app.get("/getUserData", (req, res) => {
  try {
    //logic of DB call and get user data
    throw new Error("Error while getting user data");
    res.send("User data sent");
  } catch (err) {
    res.status(500).send("some error contact support team");
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong!");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
