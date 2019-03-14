import React, { Component } from 'react';

import Pokemons from '../../components/Pokemons/Pokemons';
import Axios from 'axios';

import css from './App.css';

class App extends Component {
  render() {
    return ( 
      <div className={css.App}>
        <header>
            <h1 align="center">PokéDex!</h1>
        </header>

        <Pokemons />
      </div>
    );
  }
}

export default App;