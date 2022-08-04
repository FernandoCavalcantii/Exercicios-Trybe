import './App.css';
import React from 'react';
import Name from './Name';
import Email from './Email';
import Cpf from './CPF';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      cpf: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.value;
    this.setState({
      [name]: name === 'name' ? value.toUpperCase() : value ,
    })
  }

  render() {
    return (
      <div className="App">
        <fieldset>
          <Name
          handleChange={this.handleChange}
          value={this.state.name}
          />
          <Email
          handleChange={this.handleChange}
          value={this.state.email}
          />
          <Cpf
          handleChange={this.handleChange}
          value={this.state.cpf}
          />
        </fieldset>
      </div>
    );
  }
}

export default App;
