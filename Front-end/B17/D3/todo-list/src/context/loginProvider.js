import React from 'react';
import useArray from '../hooks/useArray';

const LoginProvider = () => {
  const [setInput, setList, list, input] = useArray();

  const handleChange = ({ target }) => {
    const { value } = target;
    setInput(value);
  };

  const handleClick = () => {
    setList([...list, input]);
    setInput('');
  };

  return (
    <div>
      <input type='text' onChange={handleChange} value={input} />
      <button onClick={handleClick}>Salvar item</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default LoginProvider;
