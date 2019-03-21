import { createHash } from 'crypto';
import Axios from 'axios';
import React, { Component } from 'react';

import Icons from '../../components/UI/Icons/Icons';
import Loader from '../../components/UI/Loader/Loader';
import Pokemon from '../../components/Pokemon/Pokemon';

import css from './Pokemons.css';

class Pokemons extends Component {
  state = {
    pokemons: [],
    pokemonImg: [],
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
        const updatedPokemon = [...pokemons];
        const imgArray = [];
        const idArray= [];

        pokemons.map(async pokemon => {
          const pokemonUrl = pokemon.url;
          const res = await Axios.get(pokemonUrl);
          const id = res.data.id;
          const frontImg = res.data.sprites.front_default;

          imgArray.push(frontImg);
          idArray.push(id);

          const newImg = imgArray.map(img => img);
          const newId = idArray.map(id => id);
        
          const newData = updatedPokemon.map((pokemon, index) => {
            return {
              name: pokemon.name,
              url: pokemon.url,
              frontImg: newImg.sort((a, z) => a - z)[index],
              id: newId.sort((a, z) => a - z)[index]
            };
          })

          console.log(newData);

          this.setState({
            pokemons: newData,
            isLoading: false
          })
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
    const newData = this.state.pokemons.map(pokemon => {
      return {
        name: pokemon.name,
        frontImg: pokemon.frontImg,
        id: pokemon.id,
        url: pokemon.url
      }
    });

    let pokemons = (
      <div className={css.Error + ' z-depth-5'}>
        <Icons icon="exclamation-triangle" size="small"/>
        <p align="center"> Something went wrong... Sorry :(</p>
        <code align="center">[Error] {this.state.errorMsg}</code>
      </div>
    );

    if (!this.state.error) {
      pokemons = newData.map((pokemon, index) => {
          return (
            <Pokemon 
              name={pokemon.name}
              frontImg={pokemon.frontImg}
              id={pokemon.id}
              key={`POKEMON__${createHash('sha1').update(`pokeCard${Math.floor(Math.random(1) * 9999999)}`).digest('hex')}__CARD`}
              pokedex={this.props.pokedex}>
            </Pokemon>
          )
        });
    }

    return (
      <main className={css.Pokemons}>
        <Loader 
          show={this.state.isLoading} />
        <ul>
          { pokemons }
        </ul>
      </main>
    );
  }
};

export default React.memo(Pokemons);