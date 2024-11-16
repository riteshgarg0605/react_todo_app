const express = require("express");
const app = express();
const port = 3000;
const { createTodo, updateTodo } = require("./types.js");
const { ZodSchema } = require("zod");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HI THERE");
});

app.get("/todos", (req, res) => {});

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    return res.status(411).json({ msg: "Wrong inputs sent" });
  }
  // TODO: save todo in DB
});

app.put("/todo", (req, res) => {});

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
});
