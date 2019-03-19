import axios from 'axios';

const instance = axios.create({
  baseUrl: 'https://pokeapi.co/api/v2/'
})

instance.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://pokeapi.co/api/v2/pokemon-form/';
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;