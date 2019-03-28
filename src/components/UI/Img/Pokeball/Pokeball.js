import React from 'react';

import pokeballImg from '../../../../assets/img/pokeball.png';
import css from './Pokeball.css';

const pokeball = props => (
  <div
    className={css.Pokeball}
    style={{height: props.height, width: props.width}}>
    <img src={pokeballImg} alt="Pokeball_img" />
  </div>
);

export default pokeball;