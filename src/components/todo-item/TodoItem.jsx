import React, { Component } from 'react';
import './TodoItem.scss';

class TodoItem extends Component {
  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div className="todo-item">
        <div className="check-title">
          <input
            className="checkbox"
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          <h2 className={`${completed ? 'line-through' : 'none'} title`}>
            {title}
          </h2>
        </div>
        <div className="icons">
          <span className="edit">
            <i className="fas fa-pen"></i>
          </span>
          <span className="remove">
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default TodoItem;
