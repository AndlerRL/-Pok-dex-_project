import React from 'react';

import css from '../../../../css/PokedexData2.css';

const pokedexData2 = ({ generation, versionGrp, evolvesFrom, baseExp }) => (
  <div className={css.yellowBox1}>
    <p><span>Generation :</span> {generation}</p>
    <p><span>Version Group :</span> {versionGrp}</p>
    <p><span>Evolves from :</span> {evolvesFrom}</p>
    <p><span>Base Experience :</span> {baseExp}xp</p>
  </div>
);

export default React.memo(pokedexData2);