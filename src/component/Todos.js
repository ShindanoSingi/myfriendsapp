import Todo from "./Todo";
const Todos = ({ todos, onDelete, onToggle, getTodosLength }) => { // I have added "getTodosLength" prop so it can utilized to capt4ure

  getTodosLength(todos)

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </ul>
  );
};

export default Todos;
