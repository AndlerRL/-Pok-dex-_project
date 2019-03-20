import Axios from 'axios';
import React, { Component } from 'react';

import Loader from '../../components/UI/Loader/Loader';
import Pokemon from '../../components/Pokemon/Pokemon';
import Icons from '../../components/UI/Icons/Icons';

import css from './Pokemons.css';

class Pokemons extends Component {
  state = {
    pokemons: [],
    pokemonsImg: [],
    error: false,
    errorMsg: null,
    isLoading: true
  }

  componentDidMount() {
    Axios.get('pokemon/', {
      params: {
        offset: 0,
        limit: 20
      }
    }).then(res => {
        const pokemons = res.data.results;

        this.setState({
          pokemons: pokemons,
          isLoading: false
        })

        pokemons.map(async pokemon => {
          const pokemonUrl = pokemon.url;
          const res = await Axios.get(pokemonUrl);
          const frontImg = res.data.sprites.front_default;
          const imgArray = [];

          imgArray.map(img => {
            return img.push(frontImg);
          })
          console.log(imgArray);

          this.setState({
            pokemonsImg: frontImg
          });
        })
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
      <div className={css.Error + ' z-depth-5'}>
        <Icons icon="exclamation-triangle" size="small"/>
        <p align="center"> Something went wrong... Sorry :(</p>
        <code align="center">[Error] {this.state.errorMsg}</code>
      </div>
    );

    if (!this.state.error)
      pokemons = this.state.pokemons.map(pokemon => {
        return (
          <Pokemon 
            frontImg={this.state.pokemonsImg}
            name={pokemon.name}
            key={`POKEMON__${(Math.floor(Math.random(0) * 9999) * 4) / 2}__CARD`}
            pokedex={this.props.pokedex} />
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