import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks, deleteTask } = this.props;

    return (
      <div>
        <ul>
          {tasks.map(task => {
            return (
              <li key={task.id}>
                <button onClick={(evt) => deleteTask(task.id)}>Delete</button> {task.order}) {task.text}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;
