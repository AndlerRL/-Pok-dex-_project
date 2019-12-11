import React from 'react';
import { Box } from 'rebass';

import PokemonImg from './PokemonImg/PokemonImg';
import css from './Pokemon.css';

const pokemon = props => {
  return (
    <Box
      className={"card sticky-action z-depth-2 " + css.Pokemon}
      onClick={props.pokedex}
      id={props.id}>
      <PokemonImg
        frontImg={props.frontImg} />
      <p
        className="waves-effect waves-light">
        {props.name}
      </p>
      
    </Box>
  )
}


export default pokemon;