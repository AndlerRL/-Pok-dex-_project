import React, { Component } from 'react';

import Layout from '../Layout/Layout';
import Modal from '../../components/UI/Modal/Modal';
import Pokedex from '../../components/Pokedex/Pokedex';
import Pokemons from '../Pokemons/Pokemons';

import css from './App.css';

class App extends Component {
  state = {
    onPokedex: false
  }

  pokedexHandler = () => {
    this.setState({
      onPokedex: true
    })
  }

  pokedexCloseHandler = () => {
    this.setState({
      onPokedex: false
    })
  }

  render() {
    return ( 
      <div className={css.App}>
        <Layout />
        <section className={css.Section2}>
          FILTERS
        </section>
        <Modal 
          modalClosed={this.pokedexCloseHandler}
          show={this.state.onPokedex}>
          <Pokedex />
        </Modal>
        <Pokemons 
          pokedex={this.pokedexHandler} />
      </div>
    );
  }
}

export default App;