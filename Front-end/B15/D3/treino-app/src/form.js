import React from "react";
import { submitInfo } from "./actions";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Redirect } from 'react-router';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      redirect: false,
    }
  }
  
  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({
      [name] : value,
    });
  }

  handleClick = () => {
    const { sendInfo } = this.props;
    sendInfo(this.state);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { name, email, password, redirect } = this.state;
    return (
      <div>
        {redirect && <Redirect to="/info"/>}
        <input name="name" type="text" onChange={this.handleChange} value={name}></input>
        <input name="email" type="email" onChange={this.handleChange} value={email}></input>
        <input name="password" type="password" onChange={this.handleChange} value={password}></input>
        <button type="submit" onClick={this.handleClick}>Entrar</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendInfo: (state) => dispatch(submitInfo(state))
});

Form.propTypes = {
  sendInfo: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Form);