import React, { useState } from 'react';
import { InputForm } from './components/InputForm';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = {
      id: +new Date(),
      title: todo,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>

        <InputForm addTodo={addTodo} />
      </header>

      <section className="main">
        <input type="checkbox" id="toggle-all" className="toggle-all" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <TodoList todos={todos} />
      </section>

      <footer className="footer">
        <span className="todo-count">
          {todos.length}
          items left
        </span>

        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>

          <li>
            <a href="#/active">Active</a>
          </li>

          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>

        <button type="button" className="clear-completed">
          Clear completed
        </button>
      </footer>
    </section>
  );
}

export default App;
