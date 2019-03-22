import { createHash } from 'crypto';
import Axios from 'axios';
import React, { Component } from 'react';
import _ from 'underscore';

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
    }).then(res1 => {
        const pokemons = res1.data.results;
        const updatedPokemon = [...pokemons];
        const imgArray = [];
        const idArray = [];
        const version_grp = [];

        pokemons.map(async pokemon => {
          const pokemonUrl = pokemon.url;
          const res2 = await Axios.get(pokemonUrl);
          const id = res2.data.id;
          const frontImg = res2.data.sprites.front_default;

          imgArray.push(frontImg);
          idArray.push(id);

          let newImg = [];
          let newId = [];
          let sortedImg = [];

          if (imgArray.length === 20) {
            newImg = imgArray.map(img => img);

            sortedImg = _.sortBy(newImg, img => {
              let nums = img.split('/');
              let sortedNums = parseInt([nums[8][0], nums[8][1]].join(''));
              return sortedNums;
            });
          }

          if(idArray.length === 20) {
            newId = idArray.map(id => id).sort((a, z) => a - z);
          }

  //Here above there should be a way to sort the imgs by id or
  //name accorded to his name, position and else... Just img are
  //wrong... what can I do? That const above is from underscore.js
  //library.

  //There is something to take in consideration:
  //While I asynchronously taking the id and frontImg, it doesn't
  //load it properly at the same time, it iterates depending the size
  //and internet velocity. IF I add a condition, due order prop &
  //id prop are the same on the pokemon link, it iterates in order
  //(sometimes, maybe 50/50) as it should, but only the first 3 cards
  //& the rest remains undefined, also with id if I left it inside the
  //consitional.
  //
  //The must be a way to have all loaded and later on order it. Maybe a
  //conditional before executing the newImg and newId, instead directly
  //to the push that I made for the Img/id array. Sort it by .sort() or
  //_.sortBy() from underscore.js depending witch is better, or simplier
  //I don't know. Maybe that could fix the issue.
  //
  //Other solution? It might be that, or looking that whould be the best
  //approach for the solution. Logically, it's an condicional–don't have
  //any. Remember to complete the version_grp array and styling the
  //custom title as I have it on a screenshot of codepen.io, with a
  //data-title attr.

        
          const newData = updatedPokemon.map((pokemon, index) => {
            return {
              name: pokemon.name,
              url: pokemon.url,
              frontImg: sortedImg[index],
              id: newId[index]
            };
          })

          if (newData.length === 20) {
            this.setState({
              pokemons: newData,
              isLoading: false
            })
          }
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