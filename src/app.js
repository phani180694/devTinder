const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  //creating a new instance of user model
  const user = new User({
    firstName: "saiteja",
    lastName: "pamudurthy",
    emailId: "saiteja@gmail.com",
    password: "saiteja@123",
    age: 31,
    gender: "male",
  });

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("database connection established successfully");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error while connecting to DB");
  });
