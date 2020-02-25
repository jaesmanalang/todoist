import React, { Component } from 'react';
import './TodoInput.scss';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.text);
    this.setState({ text: '' });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="todo-input" onSubmit={this.handleSubmit}>
        <input
          className="todo-input__text"
          name="text"
          type="text"
          placeholder="Add a new todo"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <input className="todo-input__btn" type="submit" value="Add Todo" />
      </form>
    );
  }
}

export default TodoInput;
