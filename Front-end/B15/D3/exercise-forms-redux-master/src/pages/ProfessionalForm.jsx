import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { btnWork } from '../redux/actions/action';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculo: '',
      cargo: '',
      descricao: '',
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
    const { curriculo, cargo, descricao, redirect } = this.state;
    return (
      <>
        { redirect && <Redirect to="/formdisplay" /> }
        <fieldset>
          <TextArea
            label="Resumo do currículo: "
            value={ curriculo }
            name="curriculo"
            maxLength="1000"
            onChange={ this.handleChange }
            required
          />
          <Input
            label="Cargo:"
            name="cargo"
            type="text"
            value={ cargo }
            onChange={ this.handleChange }
            required
          />
          <TextArea
            label="Descrição do cargo: "
            name="descricao"
            maxLength="500"
            onChange={ this.handleChange }
            value={ descricao }
            required
          />
          <Button
            label="enviar"
            onClick={ () => this.redirectLink(this.state) }
          />
        </fieldset>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  handleClick: (state) => dispatch(btnWork(state)),
});

ProfessionalForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ProfessionalForm);
