const express = require("express");

const app = express();

app.use("/user", (req, res) => {
  res.send("Hello from user");
});

// This will only handle GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "Phani", lastName: "Pamudurthy" });
});

app.post("/user", (req, res) => {
  //saving  data to database
  res.send("Data sucessfully saved to database");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully");
});

//this will match all the HTTP method API calls to /tests
app.use("/test", (req, res) => {
  res.send("Hello from server");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
