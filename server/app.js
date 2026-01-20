// the importancce of express here is to handle http requests and responses
const express = require("express");

const app = express();
const PORT = 5000;

// parse incoming JSON
// when a client sends a request , it comes as raw text, this code changes it to json because json is what the backend API understands and the fact that most modern API's respond with json .
app.use(express.json());

// we are testing the health route endpoint to see if it works
app.get("/health", (req, res) => {
  res.json({ status: "API is running" });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
