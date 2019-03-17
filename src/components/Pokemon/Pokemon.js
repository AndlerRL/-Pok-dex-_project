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
    
    <div
      className="card-reveal blue-grey darken-4" >
      <span 
        className="card-title grey-text text-lighten-5" >
        Description
        <Icons icon="times"></Icons>
      </span>
      <img
        className="card-back" 
        src={props.backImg}
        alt="Pokemon_back" />
      <p>Weight: {props.weight}kg</p>
    </div>
  </li>
)


export default pokemon;