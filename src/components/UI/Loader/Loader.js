import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import css from './Loader.css';

const loader = props => (
  <Aux>
    <Backdrop 
      cancel={props.isLoading}
      show={props.show} />
    <div 
      className={css.Loading}
      style={{
        display: props.show ? 'block' : 'none'
      }}>
      <div>
        <img
          src="assets/img/pokeball.webp"
          alt="pokeball_load" />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <span>loading pokédex</span>
    </div>
  </Aux>
);

export default loader;