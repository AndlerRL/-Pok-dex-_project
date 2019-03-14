import React from 'react';

import pokeballImg from '../../../../assets/img/pokeball.webp';
import css from './Pokeball.css';

const pokeball = props => (
  <div
    className={css.Pokeball}
    style={{height: props.height}}>
    <img src={pokeballImg} alt="Pokeball_img" />
  </div>
);

export default pokeball;