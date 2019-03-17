import React, { Component } from 'react';

import Pikachu from '../../components/UI/Img/Pikachu/Pikachu';
import Pokeball from '../../components/UI/Img/Pokeball/Pokeball';
import PokeballPixel from '../../components/UI/Img/PokeballPixel/PokeballPixel';
import Pokemons from '../Pokemons/Pokemons';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import Aux from '../../hoc/Aux/Aux';
import css from './Layout.css';

class Layout extends Component {



  render () {

    return (
      <Aux>
        <header className={"z-depth-2"}>
          <Pikachu height="100%" />
          <div className={css.SearchBar}>
            <Pokeball className={css.Pokeball} />
            <SearchBar 
              searchP={this.clearHandler} />
          </div>
          <h1>PokéDex!</h1>
        </header>
        <section className={css.Section1}>
          <PokeballPixel height="100%" />
          <p>Can you lore them all? Search them by name or version group! You can click to see more details.</p>
        </section>
        <section className={css.Section2}>
          FILTERS
        </section>
        <Pokemons />
        <footer>
          <p> WebApp made with love and fun by <a target="_blank" rel="noopener noreferrer" href="http://andlerrl.co" className="black-text">AndlerRL</a>. 2019 ® All rights Reserved.</p>
        </footer>
      </Aux>
    );
  }
}

export default Layout;

