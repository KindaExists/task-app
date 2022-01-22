import React, { Component } from 'react';
import uniqid from 'uniqid';

import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        text: '',
        id: uniqid(),
      },
      tasks: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleChange(evt) {
    const target = evt.target;
    const newText = target.value;
    this.setState({
      task: {
        text: newText,
        id: this.state.task.id,
      },
    });
  }

  formSubmit(evt) {
    evt.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid(),
      },
    });
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <label htmlFor="taskInput">Enter Task: </label>
          <input 
            type="text"
            name="taskInput"
            onChange={this.handleChange}
            value={task.text}
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks}/>
      </div>
    );
  }
}

export default App;
