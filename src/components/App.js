import React, { Component } from 'react';
import './App.scss';
import Header from './header/Header';
import TodoInput from './todo-input/TodoInput';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <TodoInput />
        </div>
      </div>
    );
  }
}

export default App;
