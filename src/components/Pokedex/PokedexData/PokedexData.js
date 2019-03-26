import React from 'react';

import css from './PokedexData.css';

const pokedexData = props => (
  <div className={css.Stats}>
    <span>Name :</span> {props.name} <br/>
    <span>Type :</span> {props.type} <br/>
    <span>Height :</span> {props.height} <br/>
    <span>Weight :</span> {props.weight} lbs.<br/>
    <span>{props.descriptionTitle}</span>
    {props.descriptionBody} <br/>
  </div>
)

export default React.memo(pokedexData);