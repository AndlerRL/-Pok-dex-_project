import React from 'react';

import css from '../../../css/PokedexData.css';

const pokedexData = ({ name, type, eggGrp, height, weight, habitat, descriptionTitle, descriptionBody}) => (
    <div className={css.Stats}>
      <ul>
        <li><span>Name :</span> {name}</li>
        <li><span>Type :</span> {type}</li>
        <li><span>Egg Group :</span> {eggGrp}</li>
        <li><span>Height :</span> {height}''</li>
        <li><span>Weight :</span> {weight} lbs.</li>
        <li><span>Habitat :</span> {habitat}</li>
      </ul>
      <span>{descriptionTitle}</span>
      <p>{descriptionBody}</p>
    </div>
  )

export default React.memo(pokedexData);