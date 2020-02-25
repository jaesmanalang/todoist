import React from 'react';
import './TodoList.scss';
import TodoItem from '../todo-item/TodoItem';

const TodoList = ({ todos, markComplete }) => (
  <div className="todo-list">
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={markComplete} />
    ))}
  </div>
);

export default TodoList;
