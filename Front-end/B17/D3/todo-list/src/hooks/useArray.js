import { useState } from "react";

const useArray = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  return [setInput, setList, list, input];
}

export default useArray;