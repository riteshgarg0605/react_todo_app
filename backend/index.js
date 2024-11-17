const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const { createTodo, updateTodo } = require("./types.js");
const { Todo } = require("./db.js");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HI THERE");
});

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  if (!todos) {
    return res.status(404).json({ msg: "No todos found" });
  }
  res.status(200).json(todos);
});

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    return res.status(411).json({ msg: "Wrong inputs sent" });
  }
  const todo = await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.status(200).json(todo);
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    return res.status(411).json({
      msg: "Wrong inputs sent",
    });
  }
  const updatedTodo = await Todo.findByIdAndUpdate(
    updatePayload.id,
    { completed: true },
    { new: true }
  );
  if (!updatedTodo) {
    return res.status(500).json({ msg: "Internal server error" });
  }
  res.status(200).json(updatedTodo);
});

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
});
