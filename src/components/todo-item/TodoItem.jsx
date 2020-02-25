import React from 'react';
import './TodoItem.scss';

const TodoItem = ({ title, completed }) => (
  <div className="todo-item">
    <h2 className="title">{title}</h2>
  </div>
);

export default TodoItem;
