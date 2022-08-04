import React from 'react';

class Email extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label>E-mail
        <input
        type="email"
        maxLength="50"
        name="email"
        onChange={handleChange}
        value={value}
        Required
        >
        </input>
      </label>
    );
  }
}

export default Email;
