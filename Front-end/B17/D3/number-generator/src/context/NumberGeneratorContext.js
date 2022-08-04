import { useState, useEffect } from 'react';

const tenSeconds = 10000;
const fourSeconds = 4000;

const NumberGeneratorContext = () => {
  const [number, setNumber] = useState(Math.round(Math.random() * 100));
  const [message, setMessage] = useState(false);
  
  const generateNumber = () => {
    const random = Math.round(Math.random() * 100);
    setNumber(random)
  };

  useEffect(() => {
    const randomNumbers = setInterval(generateNumber, tenSeconds);
    const hideMessage = setTimeout(() => setMessage(true), fourSeconds);
    const showMessage = setTimeout(() => setMessage(false), tenSeconds);
    return () => {
      clearInterval(randomNumbers);
      clearInterval(hideMessage);
      clearInterval(showMessage);
    }
  })

  
  

  return (
    <div>
      <div>{number}</div>
      <div>
        {
          message ? '' : number % 3 === 0 || number % 5 === 0 ? <div>Acerto</div> : <div> Não é multiplo de 3 ou 5</div>
        }
      </div>
    </div>
  )
}

export default NumberGeneratorContext;