import React from "react";
import Header from "./component/Header";
import Todos from "./component/Todos";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);

  // I have added this state so that I can send it to Todos component to grab/get "todos.length". todoLength will be sent to header because the box displays the number of todos is in the "Header" component.
  const[todoLength, setTodoLength] = useState(0);

  // I have added this function so that I can capture "todos.length" from Todos component and make it available in App.js.
  const getTodosLength = (todos) => {
    setTodoLength(todos.length)
    console.log(todoLength)
  }

  // Add Todo
  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTodo = { id, ...todo };
    setTodos([...todos, newTodo]);
    console.log(todo);
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle remainder
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <Header onAdd={addTodo} todoLength={todoLength}/>
      {todos.length > 0 ? (
        <Todos todos={todos} getTodosLength={getTodosLength} onDelete={deleteTodo} onToggle={toggleTodo} /> // I have added getTodosLength to Todos component so the function will be used to capture todos length from Todos component. I have also added todoLength in "Header" so we can desplay the todoLenth.
      ) : (
        "No todos to show!"
      )}
    </div>
  );
}

export default App;
