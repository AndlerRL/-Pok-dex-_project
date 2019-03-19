import React from 'react';

import Icons from '../UI/Icons/Icons';
import css from './Pokemon.css';

const pokemon = props => (
  <li 
    className={"card activator sticky-action " + css.Pokemon} >
    <img
      className="activator waves-effect waves-block waves-light"
      src={props.frontImg}
      alt="Pokemon_front" />
    <p 
      align="center"
      className="card-action waves-effect waves-block waves-light"
      id="text" >
      {props.name}
    </p>
  </li>
)


export default pokemon;