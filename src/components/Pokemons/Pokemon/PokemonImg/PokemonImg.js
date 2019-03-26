import React from 'react';

import css from './PokemonImg.css';

const pokemonImg = props => (
  <div
    className={"waves-effect waves-light " + css.PokemonImg}
    style={{height: props.height, width: props.width}}>
    <img
        className={css.Pokemon}
        src={props.frontImg}
        alt="Pokemon_front_default" />
  </div>
);

export default pokemonImg;