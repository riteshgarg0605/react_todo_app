import { useState, useEffect } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      .then(function (res) {
        setTodos(res.data);
      })
      .catch(function (error) {
        console.error("Error fetching todos:", error);
      });
  }, []);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo._id === updatedTodo._id ? updatedTodo : todo
      )
    );
  };

  return (
    <div>
      <CreateTodo addTodo={addTodo}></CreateTodo>
      <Todos todos={todos} updateTodo={updateTodo}></Todos>
    </div>
  );
}

export default App;
