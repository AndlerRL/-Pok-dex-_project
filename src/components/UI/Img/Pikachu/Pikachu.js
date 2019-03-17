import React from 'react';

import pikachuImg from '../../../../assets/img/pikachu.png';
import css from './Pikachu.css';

const pikachu = props => (
  <div
    className={css.Pikachu}
    style={{height: props.height, width: props.width}}>
    <img src={pikachuImg} alt="Pikachu_img" />
  </div>
);

export default pikachu;