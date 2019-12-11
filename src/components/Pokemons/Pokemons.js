import { createHash } from 'crypto';
import React, { Component } from 'react';
import { Flex } from 'rebass';

import Pokemon from './Pokemon/Pokemon';

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
      <Flex flexWrap="wrap"
        alignItems="flex-start"
        justifyContent="flex-start"
        width={1}
        py={5}>
        { pokemons }
      </Flex>
    );
  }
};

export default React.memo(Pokemons);