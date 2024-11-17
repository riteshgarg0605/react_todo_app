export function CreateTodo() {
  return (
    <div>
      <input
        style={{ padding: 5, margin: 5 }}
        type="text"
        placeholder="title"
      ></input>
      <input
        style={{ padding: 5, margin: 5 }}
        type="text"
        placeholder="description"
      ></input>
      <button style={{ padding: 5, margin: 5 }}>Add a todo</button>
    </div>
  );
}
