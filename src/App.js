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
        order: 1,
      },
      tasks: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleChange(evt) {
    const target = evt.target;
    const newText = target.value;
    this.setState({
      task: {
        text: newText,
        id: this.state.task.id,
        order: this.state.tasks.length + 1,
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
        order: this.state.tasks.length + 1,
      },
    });
  }

  deleteTask(taskId) {
    // The callback form of setState() is used in the 2nd function
    // because async causes the same state to be passed to both setState() functions
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return task.id !== taskId;
      })
    });
    this.setState((state) => {
      return {
        tasks: state.tasks.map((task, index) => {
          return {
            text: task.text,
            id: task.id,
            order: index + 1,
          }
        })
      };
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
        <Overview tasks={tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
