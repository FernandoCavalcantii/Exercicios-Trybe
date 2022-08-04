import React from 'react';

class Name extends React.Component {
  render() {
    let error = undefined;
    const { handleChange, value } = this.props;
    if(value.length > 39) error = 'Caracteres máximos'
    return (
        <label>
          Nome:
          <input
          type="text"
          name="name"
          onChange={handleChange}
          maxLength="40"
          value={value}
          required
          >
          </input>
          <input type="submit"></input>
          <span>{error}</span>
        </label>
    );
  }
}

export default Name;
