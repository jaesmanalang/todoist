import React from 'react';
import './TodoList.scss';
import TodoItem from '../todo-item/TodoItem';

const TodoList = ({ todos }) => (
  <div className="todo-list">
    {todos.map(({ id, ...otherProps }) => (
      <TodoItem key={id} {...otherProps} />
    ))}
  </div>
);

export default TodoList;
