const express = require("express");

const app = express();

//we can use multiple route handlers for a single route. The route handlers will be executed in the order they are defined. The next() function is used to pass control to the next route handler.
//app.use("/route" , rH, [rH2, rH3], rH4, rH5);

app.use(
  "/user",
  (req, res, next) => {
    //route handler 1
    //res.send("Route Handler 1");
    next();
  },
  (req, res, next) => {
    //route handler 2
    //res.send("Route Handler 2");
    next();
  },
  (req, res) => {
    //route handler 3
    res.send("Route Handler 3");
  },
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
