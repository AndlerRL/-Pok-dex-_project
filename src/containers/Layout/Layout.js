import React, { Component } from 'react';

import Pikachu from '../../components/UI/Img/Pikachu/Pikachu';
import Aux from '../../hoc/Aux/Aux';
import css from './Layout.css';

class Layout extends Component {
  render () {

    return (
      <Aux>
        <header className={"z-depth-2"}>
          <Pikachu height="100%" />
          <h1>PokéDex!</h1>
        </header>
        <section className={css.Section1}>
          <span className={css.Img}>
          </span>
            <p>Can you lore them all? Search them by the Pokémon name! Click the card to see the PokéDex.</p>
        </section>
        { this.props.children }
        <footer>
          <p> WebApp made with love and fun by <a target="_blank" rel="noopener noreferrer" href="https://andler.netlify.com" className="black-text">AndlerRL</a>. 2019 ® All rights Reserved. Pokémon and Pokémon character names are trademarks of Nintendo.</p>
        </footer>
      </Aux>
    );
  }
}

export default Layout;

