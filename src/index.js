import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';
Axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://pokeapi.co/api/v2/pokemon/';
Axios.defaults.headers.post['Content-Type'] = 'application/json';

Axios.interceptors.request.use(req => {
  //console.log('REQUEST', req, "\n \n");

  return req;
}, err => {
  console.log(err);

  return Promise.reject(err);
});

Axios.interceptors.response.use(res => {
  //console.log('RESPONSE', res, "\n \n");

  return res;
}, err => {
  console.log(err);

  return Promise.reject(err);
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
