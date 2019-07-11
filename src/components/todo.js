// import React, { Component } from 'react';
import React  from 'react';


const Todo = (props) => {
  return (
    <li>
      content: {props.content}<br />
      completed: {props.completed ? 'yes' : 'no'}
    </li>
  )
}

// class Todo extends Component {
//   render() {
//     return (
//       <li>
//         content: {this.props.content}<br />
//         completed: {this.props.completed ? 'yes' : 'no'}
//       </li>
//     )
//   }
// }

export default Todo;
