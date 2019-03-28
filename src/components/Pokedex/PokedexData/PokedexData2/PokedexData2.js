import React from 'react';

import css from './PokedexData2.css';

const pokedexData2 = props => (
  <div className={css.yellowBox1}>
    <p><span>Generation :</span> {props.generation}</p>
    <p><span>Version Group :</span> {props.versionGrp}</p>
    <p><span>Evolves from :</span> {props.evolvesFrom}</p>
    <p><span>Base Experience :</span> {props.baseExp}xp</p>
  </div>
);

export default React.memo(pokedexData2);