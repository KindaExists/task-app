import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks, deleteTask, enableEditTask, disableEditTask, handleEditChange } = this.props;

    return (
      <div>
        <ul>
          {tasks.map(task => {
            if(task.editEnabled) {
              return (
                <li key={task.id}>
                  ({task.order}) <button onClick={() => deleteTask(task.id)}>Delete</button>
                  <button onClick={() => disableEditTask(task.id)}>Save</button> <input
                    type="text"
                    name="taskInput"
                    onChange={(evt) => handleEditChange(evt, task.id)}
                    value={task.text}
                  />
                </li>
              );
            } else {
              return (
                <li key={task.id}>
                  ({task.order}) <button onClick={() => deleteTask(task.id)}>Delete</button>
                  <button onClick={() => enableEditTask(task.id)}>Edit</button> {task.text}
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;
