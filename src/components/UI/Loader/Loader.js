import React from 'react';

import Pokeball from '../Img/Pokeball/Pokeball';
import Aux from '../../../hoc/Aux/Aux';
import css from './Loader.css';

const loader = props => (
  <Aux>
    { props.backdrop ?
      <div
        className={css.Backdrop}
        style={{
          opacity: props.show ? 1 : 0,
          display: props.show ? 'initial' : 'none',
        }}>
      </div>
      : null
    }
    <div 
      className={css.LdsRing}
      style={{
        opacity: props.show ? 1 : 0,
        display: props.show ? 'initial' : 'none',
        marginTop: props.loader ? '2.88888%' : null
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