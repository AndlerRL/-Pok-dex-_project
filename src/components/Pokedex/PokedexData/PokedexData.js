import React from 'react';

import css from './PokedexData.css';

const pokedexData = props => (
  <div className={css.Stats}>
    <ul>
      <li><span>Name :</span> {props.name}</li>
      <li><span>Type :</span> {props.type}</li>
      <li><span>Egg Group :</span> {props.eggGrp}</li>
      <li><span>Height :</span> {props.height}''</li>
      <li><span>Weight :</span> {props.weight} lbs.</li>
      <li><span>Habitat :</span> {props.habitat}</li>
    </ul>
    <span>{props.descriptionTitle}</span>
    <p>{props.descriptionBody}</p>
  </div>
)

export default React.memo(pokedexData);