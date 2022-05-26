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
  counter.counter++;
  res.json(counter);
});

// POST /counter/decrement- Decrements a counter on the server and returns the current value.
app.post("/counter/decrement", (req, res) => {
  counter.counter--;
  res.json(counter);
});

// POST /counter/double- Double the value of the counter on the server and returns the current value.
app.post("/counter/double", (req, res) => {
  counter.counter *= 2;
  res.json(counter);
});

// DELETE /counter - Resets the counter to 0 and returns the current value.
app.delete("/counter", (req, res) => {
  counter.counter = 0;
  res.json(counter);
});

const port = 3030;
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
