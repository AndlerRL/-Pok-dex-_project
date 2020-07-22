import React from 'react';
import { Box } from 'rebass';

import PokemonImg from './PokemonImg/PokemonImg';
import css from './Pokemon.css';

const pokemon = (props: { id: string, pokedex(...attr: any): () => void, frontImg: string; name: string }) => (
  <Box
    className={"card sticky-action z-depth-2 " + css.Pokemon}
    onClick={props.pokedex}
    id={props.id}>
    <PokemonImg
      frontImg={props.frontImg}
      height="initial"
      width="initial"
    />
    <p
      className="waves-effect waves-light">
      {name}
    </p>
  </Box>
)


export default pokemon;