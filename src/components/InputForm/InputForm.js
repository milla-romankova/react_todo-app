import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const InputForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;

    setTodo(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addTodo(todo);
    setTodo('');
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        name="todo"
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value={todo}
        onChange={handleChange}
      />
    </form>
  );
};

InputForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
