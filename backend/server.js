const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let polls = [];
let idCounter = 1;

app.get("/polls", (req, res) => res.json(polls));

app.post("/polls", (req, res) => {
  const { question, options } = req.body;

  const newPoll = {
    id: idCounter++,
    question,
    options: options.map(o => ({ text: o, votes: 0 }))
  };

  polls.push(newPoll);
  res.status(201).json(newPoll);
});

app.post("/polls/:id/vote", (req, res) => {
  const poll = polls.find(p => p.id == req.params.id);
  poll.options[req.body.optionIndex].votes++;
  res.json(poll);
});

app.delete("/polls/:id", (req, res) => {
  polls = polls.filter(p => p.id != req.params.id);
  res.json({ message: "Deleted" });
});

app.get("/polls/:id/results", (req, res) => {
  const poll = polls.find(p => p.id == req.params.id);
  const totalVotes = poll.options.reduce((a, b) => a + b.votes, 0);

  res.json({
    question: poll.question,
    results: poll.options,
    totalVotes
  });
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));