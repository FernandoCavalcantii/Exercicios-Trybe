import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nome from './Nome';
import Email from './Email';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      select: '',
      name: '',
      email: '',
      descricao: '',
      presença: false,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <form>
        <label>Nacionalidade
          <select name="select"
          value={this.state.select}
          onChange={this.handleChange}
          >
            <option>Brasileiro</option>
            <option>Estado-unidense</option>
            <option>Português</option>
            <option>Espanhol</option>
          </select>
        </label>
        <fieldset>
          <Nome
          onChange={this.handleChange}
          value={this.state.name}
          />
          <Email
          onChange={this.handleChange}
          value={this.state.email}
          />
          <label>Descrição
            <textarea
              name="descricao"
              placeholder="Conte um pouco sobre você."
              value={this.state.descricao}
              onChange={this.handleChange}
            >
            </textarea>
          </label>
        </fieldset>
        <label>Vou comparacer
          <input
          name="presença"
          type="checkbox"
          value={this.state.check}
          onChange={this.handleChange}
          />
        </label>
        <label>Anexar
          <input
          name="anexo"
          type="file"
          />
        </label>
      </form>
      )
    }
}

export default App;
