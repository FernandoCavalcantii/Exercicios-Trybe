const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json());


function authVerify(req, res, next){
  const { Authorization } = req.headers;
	console.log(Authorization);
	if(Authorization.length !== 12) {
		return res.status(401).json({ message: 'Invalid Token'});
	}
	next(); //Sera que é necessário?
}


app.get('/btc/price', authVerify, () => {
  const { Authorization } = req.headers;
  
  // return axios.get('/https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
  // .then(function (response) {
  //   console.log(response);
	// 	return response;
  // })
  // .catch(function (error) {
  //   console.log(error);
	// 	return error;
  // })
  console.log('chegou no final')
  // return res.json();
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); 

//https://api.coindesk.com/v1/bpi/currentprice/BTC.json