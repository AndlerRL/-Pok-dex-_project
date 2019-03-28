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
      </Aux>
    );
  }
}

export default Layout;

