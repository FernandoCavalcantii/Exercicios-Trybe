// apiScript.js    
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const container = document.getElementById('jokeContainer');

  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(response => {
    const li = document.createElement('li');
    li.innerHTML = response.joke;
    container.appendChild(li);
  })
};

window.onload = () => fetchJoke();