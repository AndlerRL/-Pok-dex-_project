import React, { Component } from 'react';

import Loader from '../../components/UI/Loader/Loader';
import Pokemon from '../../components/Pokemon/Pokemon';
import Axios from 'axios';

import css from './App.css';

class App extends Component {
  state = {
    pokemons: [],
    selectedPokemonId: null,
    error: false,
    errorMsg: null,
    isLoading: true
  }

  componentDidMount() {
    Axios.get('pokemon-form/')
      .then(res => {
        const pokemons = res.data.slice(0, 100);
        const updatedPokemons = pokemons.map(pokemon => {
          return {
            ...pokemon
          }
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
  
  render() {
    let pokemon = (
      <div>
        <p align="center">Something went wrong... Sorry :(</p>
        <code align="center">{this.state.errorMsg}</code>
      </div>
    );

    if (!this.state.error)
      pokemon = this.state.pokemons.map(pokemon => {
        return (
          <Pokemon 
            frontImg={pokemon.sprites.front_default}
            backImg={pokemon.sprites.back_default}
            versionGrp={pokemon.version_group.name}
            name={pokemon.name}
            key={`__POKEMON__${Math.floor(Math.random() * 999) * pokemon.id }`} />
        )
      });

    return ( 
      <div className={css.App}>
        <header>
          <h1 align="center">PokéDex!</h1>
        </header>
        <section>
          <Loader />

          <ul>
            { pokemon }
          </ul>
        </section>
      </div>
    );
  }
}

export default React.memo(App);