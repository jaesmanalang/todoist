import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

  addTodo = text => {
    if (text.length > 0) {
      const newTodo = {
        id: Date.now(),
        title: text,
        completed: false
      };
      console.log(newTodo.title);
      this.setState({ todos: [...this.state.todos, newTodo] });
    } else {
      alert('Please type something');
    }
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
    console.log(id);
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  editTodo = id => {
    console.log(id);
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Router>
            <Switch>
              <Route path="/">
                <TodoInput addTodo={this.addTodo} editTodo={this.editTodo} />
                <TodoList
                  todos={this.state.todos}
                  deleteTodo={this.deleteTodo}
                  editTodo={this.editTodo}
                  markComplete={this.markComplete}
                />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
