import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <li>
        content: {this.props.content}<br />
        completed: {this.props.completed ? 'yes' : 'no'}
      </li>
    )
  }
}

export default Todo;