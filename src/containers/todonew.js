import React, { Component } from 'react';

class TodoNew extends Component {
  state = {
    content: '',
    content1: '',
    content2: '',
    completed: false
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value })
  }

  handleFormSubmission = (e) => {
    e.preventDefault();

    this.props.createTodo(this.state)
    this.props.history.push('/')
  }

  render() {

        console.log(this.state)
    return(
      <div>
        <h1>Add A ToDo!</h1>
        <form onSubmit={this.handleFormSubmission}>
          <label>Content: </label><input type='text' name='content' value={this.state.content} onChange={this.handleChange}/><br />

          <label>Content1: </label><input type='text' name='content1' value={this.state.content1} onChange={this.handleChange}/><br />

          <label>Content2: </label><input name='content2' value={this.state.content2} onChange={this.handleChange}/><br />

          <label>Task completed?</label><input type='checkbox' name='completed' value={this.state.completed} onChange={this.handleChange}/><br />
          <input type='submit' value='Add ToDo'/>
        </form>
      </div>
    )
  }
}

export default TodoNew;
