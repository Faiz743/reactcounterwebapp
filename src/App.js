import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({count: this.state.count + 1});
  }

  decrement = () => {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <>
        <div className="app">

          <div className="welcome">
            <h1>Welcome to Counter App</h1>
          </div>

          <div className="counter">
            <h1>Counter</h1>
          </div>

          <div className="number">
            <h2>{this.state.count}</h2>
          </div>

          <div className="button">
            <Button variant="contained" size="large" color="primary" onClick={this.increment}>
              Add Count
            </Button>
            <Button variant="contained" size="large" color="secondary" onClick={this.decrement}>
              Lower Count
            </Button>
          </div>
        
        </div>
      </>
    )
  }
}

export default App;
