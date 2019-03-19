import Axios from 'axios';
import React, { Component } from 'react';

import Loader from '../../components/UI/Loader/Loader';
import Pokemon from '../../components/Pokemon/Pokemon';

import css from './Pokemons.css';

class Pokemons extends Component {
  state = {
    pokemons: [],
    error: false,
    errorMsg: null,
    isLoading: true
  }

  componentDidMount() {
    Axios.get('pokemon/1', {
      params: {
        offset: 0,
        limit: 20
      }
    }).then(res => {
        const pokemons = Array(res.data);
        const updatedData = pokemons.map((pokemon, index) => {
          return {
            name: pokemon.name,
            frontImg: pokemon.sprites.front_default
          }
        });
        
        console.log(updatedData);
        this.setState({
          pokemons: updatedData,
          isLoading: false
        })

        console.log(this.state.pokemons)
      })
    .catch(err => {
      this.setState({
        error: true,
        errorMsg: err.toString()
      })
    });
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
            frontImg={pokemon.frontImg}
            name={pokemon.name}
            key={`POKEMON__${(Math.floor(Math.random(0) * 9999) * 3) / 2}__CARD`} />
        );
      });
      
      

    return (
      <section className={css.Pokemons}>
        <Loader 
          show={this.state.isLoading} />
        <ul>
          { pokemons }
        </ul>
      </section>
    );
  }
};

export default React.memo(Pokemons);