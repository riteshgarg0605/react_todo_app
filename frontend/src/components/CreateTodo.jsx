import axios from "axios";

export function CreateTodo({ addTodo }) {
  return (
    <div>
      <input
        style={{ padding: 5, margin: 5 }}
        type="text"
        id="title"
        placeholder="title"
      ></input>
      <input
        style={{ padding: 5, margin: 5 }}
        type="text"
        id="desc"
        placeholder="description"
      ></input>
      <button
        style={{ padding: 5, margin: 5 }}
        onClick={() => {
          const title = document.getElementById("title").value;
          const description = document.getElementById("desc").value;
          axios
            .post("http://localhost:3000/todo", {
              title,
              description,
            })
            .then((res) => {
              console.log(res.data);
              alert("Todo added");
              addTodo(res.data);
            })
            .catch((err) => console.error("Some problem encountered", err));
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
