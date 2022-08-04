import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const button = document.querySelector('.btn');
    this.setState((prevState, _props) => ({
      count: prevState.count + 1
    }))
    if (this.state.count % 2 === 1) {
      button.style.backgroundColor = 'green';
    } else {
      button.style.backgroundColor = 'gray';
    }
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={this.handleClick}>{this.state.count}</button>
      </div>
    )
  }
}

export default App;
