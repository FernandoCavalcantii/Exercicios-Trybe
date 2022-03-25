import React from 'react';

class Email extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label>
        E-mail
        <input
          type="email"
          name="email"
          value={value}
          onChange={onChange}
          placeholder="Melhor e-mail"
        />
      </label>
    );
  }
}

export default Email