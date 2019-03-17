import React from 'react';

import pokeballPixelImg from '../../../../assets/img/pokeballPixel.png';
import css from './PokeballPixel.css';

const pokeballPixel = props => (
  <div
    className={css.PokeballPixel}
    style={{height: props.height}}>
    <img src={pokeballPixelImg} alt="Pokeball_img" />
  </div>
);

export default pokeballPixel;