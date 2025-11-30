function ToDoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label htmlFor={todo.id}>
        {todo.title}
        <input
          id={todo.id}
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => toggleTodo(todo.id, e.target.checked)}
        />
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default ToDoItem;