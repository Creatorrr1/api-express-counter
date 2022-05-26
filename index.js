// "start" : "nodemon index.js"
// "test": "echo \"Error: no test specified\" && exit 1"
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const counter = require("./counter");

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// GET / - response would be string to show us the server is active and working
app.get("/", (req, res) => {
  res.json("Server is active and running");
});

// GET /counter - Returns the current value of the counter. The counter should start of at 0.
app.get("/counter", (req, res) => {
  console.log(req.body, "GET REQUEST ACTIVE");
  res.json({ counter: counter });
});

// POST /counter/increment- Increments the counter on the server and returns the current value.
app.post("/counter/increment", (req, res) => {
  console.log("counter is being incremented");
  const upCounter = counter.counter + 1;
  res.json({ Description: "Counter is incremented by 1", Value: upCounter });
});

// POST /counter/decrement- Decrements a counter on the server and returns the current value.
app.post("/counter/decrement", (req, res) => {
  console.log("counter is being decremented");
  const downCounter = counter.counter - 1;
  res.json({ Description: "Counter is decrements by 1", Value: downCounter });
});

// POST /counter/double- Double the value of the counter on the server and returns the current value.
app.post("/counter/double", (req, res) => {
  const doubleCounter = (counter.counter + 1) * 2;
  res.json({ Description: "Counter is doubled", Value: doubleCounter });
});

// DELETE /counter - Resets the counter to 0 and returns the current value.
app.delete("/counter", (req, res) => {
  console.log("counter is being deleted and the value returns to 0");
  // how do delete an item without the id
  res.json();
});

const port = 3030;
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
