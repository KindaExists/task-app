import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const formElement = evt.target;
    const newTask = formElement['newTask'].value;
    this.addTask(newTask);
  }

  addTask(task) {
    this.setState({
      tasks: this.state.tasks.concat([task]),
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="newTask">Enter Task: </label>
          <input type="text" name="newTask"></input>
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
