import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props)

    this.state = { };
  }

  render() {
    const { tasks } = this.props;

    return (
      <div>
        <p>Overview</p>
        <p>{tasks.join(', ')}</p>
      </div>
    );
  }
}

export default Overview;
