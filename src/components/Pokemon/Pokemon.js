import React from 'react';

import css from './Pokemon.css';

const pokemon = props => (
  <li 
    className={"card sticky-action z-depth-2 " + css.Pokemon}
    onClick={props.pokedex} >
    <p
      className="waves-effect waves-light">
      {props.name}
    </p>
    <img
      className="waves-effect waves-light"
      src={props.frontImg}
      alt="Pokemon_front" />
  </li>
)


export default pokemon;