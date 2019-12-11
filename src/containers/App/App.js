import Axios from 'axios';
import React, { Component } from 'react';
import _ from 'underscore';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Flex, Text } from 'rebass';

import Layout from '../Layout/Layout';
import Modal from '../../components/UI/Modal/Modal';
import Pokedex from '../../components/Pokedex/Pokedex';
import SearchBar from '../../components/SearchBar/SearchBar';
import Pokemons from '../../components/Pokemons/Pokemons';
import Loader from '../../components/UI/Loader/Loader';
import Icons from '../../components/UI/Icons/Icons';

import css from './App.css';

class App extends Component {
  state = {
    onPokedex: false,
    pokemonFilter: null,
    pokemons: [],
    pokedex: null,
    error: false,
    errorMsg: null,
    isLoading: true,
    hasMore: true,
    showBackToTop: false
  }

  componentDidMount() {
    this.pokemonRenderHandler()

    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight)
        this.setState({
          showBackToTop: true
        })
      else if (window.scrollY < window.innerHeight)
      this.setState({
        showBackToTop: false
      })
    })
  }

  pokemonRenderHandler = () => {
    if (this.state.pokemons.length >= 151) {
      this.setState({
        hasMore: false,
      })

      return;
    }
    const res1 = Axios.get(`pokemon/?limit=15&offset=${this.state.pokemons.length || 0}`)
    
    res1.then(res1 => {
        //console.log(res1.data.results);
        const pokemons = res1.data.results;
        const imgArray = [];
        const idArray = [];

        pokemons.map(async pokemon => {
          const pokemonUrl = pokemon.url;
          const res2 = await Axios.get(pokemonUrl);
          if (pokemon.name === res2.data.species.name) {
            idArray.push(res2.data.id);
            imgArray.push(res2.data.sprites.front_default);
          }

          idArray.sort((a, b) => a > b ? 1 : -1)

          let newImg = [];
          let sortedImg = [];
          
          newImg = imgArray.map(img => img);
          
          sortedImg = _.sortBy(newImg, img => {
            let nums = img.split('/');
            let sortedNums = parseInt([nums[8][0], nums[8][1], nums[8][2]].join(''));
            return sortedNums;
          });

          const newData = pokemons.map((pokemon, index) => {
            return {
              name: pokemon.name,
              url: pokemon.url,
              frontImg: sortedImg[index],
              id: idArray[index]
            };
          })

          if (sortedImg.length === 15 && newData.length === 15)
          this.setState(prevState => {
            return {
              pokemons: [ ...prevState.pokemons, ...newData],
              isLoading: false
            }
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
        const eggGrp = pokedex2.egg_groups.map(res => {
          return res.name
        });
        let versionGrp = '';
        let flavorText = '';
        let evolvesFrom = '';

        if (pokedex2.flavor_text_entries[1].language.name === 'en') {
          flavorText = pokedex2.flavor_text_entries[1].flavor_text;
          versionGrp = pokedex2.flavor_text_entries[1].version.name;
        } else {
          flavorText = pokedex2.flavor_text_entries[2].flavor_text;
          versionGrp = pokedex2.flavor_text_entries[2].version.name;
        }

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
          evolves_from: evolvesFrom,
          version_grp: versionGrp
        }

        pokedexInfo.push(detailedInfo);
        this.setState({
          onPokedex: true,
          pokedex: pokedexInfo,
          isLoading: false
        })
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

  searchPokemonHandler = e => {
    let pokemonFilter = this.state.pokemons;

    pokemonFilter = pokemonFilter.filter(pokemon => {
      return pokemon.name.toLowerCase().search(
        e.target.value.toLowerCase()
      ) !== -1;
    });

    this.setState({
      pokemonFilter: pokemonFilter,
      hasMore: false
    })
  }

  clearSearchHandler = e => {
    document.querySelector('input[type="text"]').value = ''

    this.setState({
      pokemonFilter: null,
      hasMore: true
    })
  }

  backToTopHandler = () => {
    window.scroll({
      left: 0,
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    let pokedex = null;

    if (this.state.pokedex !== null)
      pokedex = this.state.pokedex.map(pokedex => {
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
            versionGrp={pokedex.version_grp}
            key={`${pokedex.name}'__'${Math.floor(Math.random(0) * 9999999)}`} />
        )
      })
    else
      pokedex = null;

    let pokemons = ( <div className={css.Error + ' z-depth-5'}>
      <Icons 
        type="fa"
        icon="exclamation-triangle"
        size="small" />
      <p align="center">
        Something went wrong...sorry
        <Icons 
          type="far"
          icon="frown"
          size="small" />
      </p>
      <code align="center"> 
        [Error] {this.state.errorMsg} </code>
      </div>
    );

    if (!this.state.error) {
      if (this.state.pokemonFilter === null) {
        pokemons = (
          <Pokemons 
            pokemons={this.state.pokemons}
            pokedex={this.pokedexHandler} />
        )
      } else if (this.state.pokemonFilter !== null) {
        pokemons = ( 
          <Pokemons 
            pokemons={this.state.pokemonFilter}
            pokedex={this.pokedexHandler} />
        )

        if (this.state.pokemonFilter.length === 0) {
          pokemons = ( 
            <div className={css.Error + ' z-depth-5'}>
              <span>
              Whoops...
              <Icons type="far"
                icon="grin-beam-sweat"
              size = "small" />
              </span> 
              <p>
                There 's no match for what you looking for... sorry 
              <Icons 
                type="far"
                icon="frown"
                size="small" />
              </p> 
            </div>
          )
        }
      }
    }

    return ( 
      <div className={css.App}>
        <Layout>
        <SearchBar 
          clear={this.clearSearchHandler}
          filter={this.searchPokemonHandler} /> 
        <Modal 
          modalClosed={this.pokedexCloseHandler}
          show={this.state.onPokedex}> 
          {pokedex}
        </Modal>
        {/* <Loader show={this.state.isLoading} backdrop />  */}
        <main className={css.Pokemons}>
          <InfiniteScroll 
            dataLength={(this.state.pokemonFilter && this.state.pokemonFilter.length) || this.state.pokemons.length}
            next={this.pokemonRenderHandler}
            hasMore={this.state.hasMore}
            loader={
              <Flex
                alignItems="center"
                justifyContent="center"
                style={{ position: 'relative', margin: '0 auto', height: 176, width: 176 }}>
                <Loader show={this.state.hasMore || this.state.isLoading} loader />
              </Flex>
            }
            className={css.InfiniteScroll}
            style={{ overflow: 'none' }}
            endMessage={
              this.state.pokemons.length >= 160 ? 
                <Flex
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="center"
                  width={1}>
                  <Text as="h3" letterSpacing={2} color="#f5f5f5" my={3} fontWeight="100">
                    YOU FOUND THEM ALL!
                  </Text>  
                  <Text as="h5" letterSpacing={2} color="#f5f5f5" my={3} fontWeight="300">
                    TOTAL OF: { this.state.pokemons.length }
                  </Text>
                </Flex>
              : null
            }>
            {pokemons}
          </InfiniteScroll>
          <div 
            className={css.BackToTop}
            onClick={this.backToTopHandler}
            style={{ 
              opacity: this.state.showBackToTop ? 1 : 0,
              zIndex: this.state.showBackToTop ? 99 : -1,
            }}>
            <Icons 
              type="far"
              icon="hand-point-up"
              size="small" />
          </div>
        </main> 
        </Layout> 
      </div>
    );
  }
}

  export default React.memo(App);