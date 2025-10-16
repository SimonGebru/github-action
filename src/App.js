import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Lära mig GitHub Actions", done: false },
    { id: 2, text: "Skapa Docker image", done: false },
    { id: 3, text: "Deploy automatiskt", done: false },
  ]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1 className="title"> <strong>Todo App</strong></h1>

      <form className="todo-form" onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">+</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done ? "done" : ""}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              🗑
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
