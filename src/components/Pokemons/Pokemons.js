import Axios from 'axios';
import React, { Component } from 'react';

import Loader from '../UI/Loader/Loader';
import Pokemon from './Pokemon/Pokemon';

import css from './Pokemons.css';

class Pokemons extends Component {
  state = {
    pokemons: [],
    selectedPokemonId: null,
    error: false,
    errorMsg: null,
    isLoading: true
  }

  componentDidMount() {
    Axios.get('pokemon/1')
      .then(res => {
        console.log(res.data);

        const pokemons = [res.data];
        const updatedPokemons = pokemons.map(pokemon => {
          console.log(pokemon)

          return {...pokemon}
        });

        this.setState({
          pokemons: updatedPokemons,
          isLoading: false
        });
      })
      .catch(err => {
        this.setState({
          error: true,
          errorMsg: err.toString()
        })
      });
  }

  pokemonSelectedHandler = id => {
    this.setState({
      selectedPokemonId: id
    })
  }

  render () {
    let pokemons = (
      <div>
        <p align="center">Something went wrong... Sorry :(</p>
        <code align="center">{this.state.errorMsg}</code>
      </div>
    );

    if (!this.state.error)
      pokemons = this.state.pokemons.map(pokemon => {
        return (
          <Pokemon 
            frontImg={pokemon.sprites.front_default}
            backImg={pokemon.sprites.back_default}
            name={pokemon.name}
            weight={pokemon.weight}
            key={`__POKEMON__${Math.floor(Math.random() * 999) * pokemon.id }`} />
        )
      });

    return (
      <section>
        
        <ul>
          { pokemons }
        </ul>
      </section>
    );
  }
};

export default React.memo(Pokemons);