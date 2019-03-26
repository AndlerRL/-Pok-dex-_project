import Axios from 'axios';
import React, { Component } from 'react';
import _ from 'underscore';

import Layout from '../Layout/Layout';
import Modal from '../../components/UI/Modal/Modal';
import Pokedex from '../../components/Pokedex/Pokedex';
import Pokemons from '../../components/Pokemons/Pokemons';
import Loader from '../../components/UI/Loader/Loader';
import Icons from '../../components/UI/Icons/Icons';

import css from './App.css';

class App extends Component {
  state = {
    onPokedex: false,
    pokemons: [],
    pokedex: null,
    error: false,
    errorMsg: null,
    isLoading: true
  }

  componentDidMount() {
    this.pokemonRenderHandler()
  }

  pokemonRenderHandler = () => {
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

          newImg = imgArray.map(img => img);

          sortedImg = _.sortBy(newImg, img => {
            let nums = img.split('/');
            let sortedNums = parseInt([nums[8][0], nums[8][1]].join(''));
            return sortedNums;
          });

          newId = idArray.map(id => id).sort((a, z) => a - z);
        
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
              pokemons: newData
            })
          }

          setTimeout(() => {
            this.setState({
              isLoading: false
            })
          }, 1000)
        })
      })
    .catch(err => {
      this.setState({
        error: true,
        errorMsg: err.toString()
      })
    });
  }

  pokedexHandler = (e, id) => {
    this.setState({
      isLoading: true
    });

    const pokemonIndex = this.state.pokemons.findIndex(p => {
      return p.id === id;
    })
    const pokemon = {
      ...this.state.pokemons[pokemonIndex]
    }
    const pokemons = [...this.state.pokemons];
    pokemons[pokemonIndex] = pokemon;
    
    Axios.get(pokemon.url).then(res => {
      //console.log(res.data);
      const pokedex = res.data;
      const pokedexInfo = [];
      const type = pokedex.types.map(res => {
        return res.type.name
      })

      const basicInfo = {
        name: pokedex.name,
        type: type,
        height: pokedex.height,
        weight: pokedex.weight,
        front_img: pokedex.sprites.front_default,
        base_exp: pokedex.base_experience
      }

      Axios.get(pokedex.species.url).then(res => {
        //console.log(res.data)
        const pokedex2 = res.data;
        const generation = pokedex2.generation.name;
        const habitat = pokedex2.habitat.name;
        const genera = pokedex2.genera[2].genus;
        const flavorText = pokedex2.flavor_text_entries[1].flavor_text;
        const eggGrp = pokedex2.egg_groups.map(res => {
          return res.name
        });
        let evolvesFrom = '';

        pokedex2.evolves_from_species ?
          evolvesFrom = pokedex2.evolves_from_species.name :
          evolvesFrom = "[N/A] Primary pokémon";

        const detailedInfo = {
          ...basicInfo,
          generation: generation,
          habitat: habitat,
          title_description: genera,
          description: flavorText,
          egg_grp: eggGrp,
          evolves_from: evolvesFrom
        }

        pokedexInfo.push(detailedInfo);
        this.setState({
          onPokedex: true,
          pokedex: pokedexInfo,
          isLoading: false
        })
    
        //console.log(this.state.pokedex)
        //console.log(pokedexInfo)
      })
    }).catch(err => {
      this.setState({
        error: true,
        errorMsg: err.toString()
      })
    })
  }

  pokedexCloseHandler = () => {
    this.setState({
      onPokedex: false,
      pokedex: null
    })
  }

  render() {
    let pokedex = null;

    if (this.state.pokedex !== null)
      pokedex = this.state.pokedex.map(pokedex => {
        console.log(pokedex);
        return (
          <Pokedex
            name={pokedex.name}
            frontImg={pokedex.front_img}
            type={pokedex.type.join(', ')}
            descriptionTitle={pokedex.title_description}
            descriptionBody={pokedex.description}
            height={pokedex.height}
            weight={pokedex.weight}
            eggGrp={pokedex.egg_grp.join(', ')}
            habitat={pokedex.habitat}
            evolvesFrom={pokedex.evolves_from}
            baseExp={pokedex.base_exp}
            generation={pokedex.generation}
            key={Math.floor(Math.random(0) * 999999)} />
        )
      })
    else
      pokedex = null;
    
    let pokemons = (
      <div className={css.Error + ' z-depth-5'}>
        <Icons icon="exclamation-triangle" size="small"/>
        <p align="center"> Something went wrong... Sorry :(</p>
        <code align="center">[Error] {this.state.errorMsg}</code>
      </div>
    );

    if (!this.state.error)
      pokemons = (
        <Pokemons
          pokemons={this.state.pokemons}
          pokedex={this.pokedexHandler} />
      )

    return ( 
      <div className={css.App}>
        <Layout />
        <section className={css.Section2}>
          FILTERS
        </section>
        <Modal 
          modalClosed={this.pokedexCloseHandler}
          show={this.state.onPokedex}>
          { pokedex }
        </Modal>
        <Loader 
          show={this.state.isLoading} />
        { pokemons }
        <footer>
          <p> WebApp made with love and fun by <a target="_blank" rel="noopener noreferrer" href="http://andlerrl.co" className="black-text">AndlerRL</a>. 2019 ® All rights Reserved. Pokémon and Pokémon character names are trademarks of Nintendo.</p>
        </footer>
      </div>
    );
  }
}

export default React.memo(App);