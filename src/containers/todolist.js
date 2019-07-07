import React, { Component } from 'react';
import ToDo from '../components/todo'

class TodoList extends Component {
  render() {
    let list = this.props.todos.map((todo, idx) => <ToDo key={idx+1} content={todo.content} completed={todo.completed}/>)

    return(<div><ul>{list}</ul></div>)
  }
}

export default TodoList;