import React from 'react';

import Pokeball from '../Img/Pokeball/Pokeball';
import Aux from '../../../hoc/Aux/Aux';
import css from './Loader.css';

const loader = props => (
  <Aux>
    <div
      className={css.Backdrop}
      style={{
        display: props.show ? 'initial' : 'none'
      }}>
    </div>
    <div 
      className={css.LdsRing}
      style={{
        display: props.show ? 'block' : 'none'
      }}>
      <Pokeball />
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <span>loading pokédex</span>
    </div>
  </Aux>
);

export default loader;