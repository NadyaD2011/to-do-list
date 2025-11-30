import ToDoItem from './ToDoItem.jsx'

function ToDoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className='list'>
      {todos.map(todo => (
        <ToDoItem
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;