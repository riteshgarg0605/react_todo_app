const mongoose = require("mongoose");
require("dotenv").config();

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = { Todo };
// Connect to MongoDB
mongoose
  .connect(`${process.env.DB_URL}`)
  .then(console.log("mongo db connected"));
