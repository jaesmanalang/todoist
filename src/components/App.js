import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import TodoInput from './todo-input/TodoInput';
import TodoList from './todo-list/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Wash the dishes',
          completed: false
        },
        {
          id: 2,
          title: 'Take out the trash',
          completed: false
        }
      ]
    };
  }

  addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      title: text,
      completed: false
    };
    console.log(newTodo.title);
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
    console.log(id);
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <TodoInput addTodo={this.addTodo} />
          <TodoList todos={this.state.todos} markComplete={this.markComplete} />
        </div>
      </div>
    );
  }
}

export default App;
