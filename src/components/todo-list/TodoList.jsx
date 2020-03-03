import React from 'react';
import './TodoList.scss';
import TodoItem from '../todo-item/TodoItem';

const TodoList = ({ todos, markComplete, deleteTodo }) => (
  <div className="todo-list">
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo}
        markComplete={markComplete}
      />
    ))}
  </div>
);

export default TodoList;
