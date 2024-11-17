export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo._id}>
            <h2>{todo.title}</h2>
            <h3>{todo.description}</h3>
            <button>{todo.completed ? "Completed" : "Mark as complete"}</button>
          </div>
        );
      })}
    </div>
  );
}
