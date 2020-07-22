import React from 'react';

import pikachuImg from '../../../../assets/img/pikachu.png';
import css from '../../../../css/Pikachu.css';

const pikachu = (props: { height: string; width: string }) => (
  <div
    className={css.Pikachu}
    style={{height: props.height, width: props.width}}>
    <img src={pikachuImg} alt="Pikachu_img" />
  </div>
);

export default pikachu;