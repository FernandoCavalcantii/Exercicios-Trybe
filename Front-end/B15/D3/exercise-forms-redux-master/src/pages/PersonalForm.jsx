import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import { btnPersonal } from '../redux/actions/action';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.redirectLink = this.redirectLink.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  redirectLink(state) {
    const { handleClick } = this.props;
    handleClick(state);
    this.setState({ redirect: true });
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado, redirect } = this.state;
    // const { handleClick } = this.props;
    const states = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    return (
      <>
        { redirect && <Redirect to="/professionalform" /> }
        <fieldset>
          <Input
            label="nome: "
            type="text"
            onChange={ this.handleChange }
            value={ nome }
            name="nome"
            required
          />
          <Input
            label="email: "
            type="text"
            onChange={ this.handleChange }
            value={ email }
            name="email"
            required
          />
          <Input
            label="cpf: "
            type="text"
            onChange={ this.handleChange }
            value={ cpf }
            name="cpf"
            required
          />
          <Input
            label="endereco: "
            type="text"
            onChange={ this.handleChange }
            value={ endereco }
            name="endereco"
            required
          />
          <Input
            label="cidade: "
            type="text"
            onChange={ this.handleChange }
            name="cidade"
            value={ cidade }
          />
          <Select
            defaultOption="Selecione"
            onChange={ this.handleChange }
            value={ estado }
            label="Estado: "
            id="estado"
            name="estado"
            options={ states }
          />
          <Button
            type="button"
            label="Enviar"
            onClick={ () => this.redirectLink(this.state) }
          />
        </fieldset>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  handleClick: (state) => dispatch(btnPersonal(state)),
});

PersonalForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(PersonalForm);
