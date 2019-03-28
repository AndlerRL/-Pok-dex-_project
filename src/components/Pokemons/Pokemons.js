import { createHash } from 'crypto';
import React, { Component } from 'react';

import Pokemon from './Pokemon/Pokemon';

import css from './Pokemons.css';

class Pokemons extends Component {
  state = {
    pokemons: this.props.pokemons
  }

  render () {
    let pokemons = this.props.pokemons.map(pokemon => {
      return (
        <Pokemon 
          name={pokemon.name}
          frontImg={pokemon.frontImg}
          id={pokemon.id}
          key={`POKEMON__${createHash('sha1').update(`pokeCard${Math.floor(Math.random(0) * 99999999)}`).digest('hex')}.${pokemon.id}__CARD`}
          pokedex={e => this.props.pokedex(e, pokemon.id)} />
      );
    });

    return (
      <main className={css.Pokemons}>
        <ul>
          { pokemons }
        </ul>
      </main>
    );
  }
};

export default React.memo(Pokemons);