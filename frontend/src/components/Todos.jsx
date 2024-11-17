import axios from "axios";

export function Todos({ todos, updateTodo }) {
  function handleComplete(todoId) {
    axios
      .put("http://localhost:3000/completed", { id: todoId })
      .then((res) => {
        console.log("Updated todo:", res.data);
        updateTodo(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo._id}>
            <h2>{todo.title}</h2>
            <h3>{todo.description}</h3>
            <button
              onClick={todo.completed ? null : () => handleComplete(todo._id)}
            >
              {todo.completed ? "Completed" : "Mark as complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
