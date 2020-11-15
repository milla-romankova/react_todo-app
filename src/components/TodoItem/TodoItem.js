import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ todo }) => (
  <li key={todo.id}>
    <div className="view">
      <input type="checkbox" className="toggle" />
      <label>{todo.title}</label>
      <button type="button" className="destroy" />
    </div>
  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  }).isRequired,
};
