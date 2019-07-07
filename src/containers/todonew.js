import React, { Component } from 'react';

class TodoNew extends Component {
  state = {
    content: '',
    completed: false
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({ [name]: value })
  }

  submitForm = (e) => {
    e.preventDefault();
    
  }

  render() {
    return(
      <div>
        <h1>Add A ToDo!</h1>
        <form onSubmit={this.submitForm}>
          <label>Content: </label><input type='text' name='content' value={this.state.content} onChange={this.handleChange}/><br />
          <label>Task completed?</label><input type='checkbox' name='completed' value={this.state.completed}onChange={this.handleChange}/><br />
          <input type='submit' value='Add ToDo'/>
        </form>
      </div>
    )
  }
}

export default TodoNew;