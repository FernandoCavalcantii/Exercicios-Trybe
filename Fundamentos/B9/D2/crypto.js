const ul = document.getElementById('cryptos');
const url = `https://api.coincap.io/v2/assets`;

const cryptoList = async () => {
   const fetchUrl = await fetch(url);
   const json = await fetchUrl.json();
   const data = json.data;
   const filteredData = data.filter((el) => data.indexOf(el) < 10);
   console.log(filteredData);
   const result = filteredData.forEach((el) => {
       const li = document.createElement('li');
       li.innerHTML = `${el.name}, ${el.symbol}, ${parseFloat(el.priceUsd).toFixed(2)}`;
       ul.appendChild(li);
   });
   return result;
}

cryptoList();