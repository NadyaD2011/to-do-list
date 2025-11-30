import './index.css';
import NewToDoForm from "./components/NewToDoForm.jsx";
import ToDoList from "./components/ToDoList.jsx";
import { useState, useEffect } from 'react';

const ITEMS_KEY = 'ITEMS'; // вынесем ключ в константу для удобства и избежания опечаток

function App() {
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem(ITEMS_KEY);
    if (localValue === null) {
      return [];
    }
    try {
      return JSON.parse(localValue);
    } catch (e) {
      console.error('Failed to parse todos from localStorage', e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(ITEMS_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem === '') return;

    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: crypto.randomUUID(),
        title: newItem,
        completed: false
      }
    ]);

    setNewItem('');
  };

  const toggleTodo = (id, completed) => {
    setTodos(currentTodos =>
      currentTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: completed
          };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(currentTodos =>
      currentTodos.filter(todo => todo.id !== id)
    );
  };

  return (
    <>
      <NewToDoForm newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <h1 className='header'>Todo List</h1>
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;

