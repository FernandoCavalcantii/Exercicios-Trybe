import React from 'react';

class Nome extends React.Component {
  render() {
    let error = undefined;
    const { onChange, value } = this.props;
    if(value.length > 15) error = 'Reduza caracteres';
    if(value.length <= 3) error = 'Minimo 4 caracteres'
    return (
      <div>
        <label>
          Nome
          <input
            type="text"
            name="name"
            value={value}
            onChange={onChange}/>
        </label>
        <span>{error ? error : ''}</span>
      </div>
    );
  }
}

export default Nome