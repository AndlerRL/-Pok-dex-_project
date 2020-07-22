import { createHash } from 'crypto';
import React from 'react';
import { Flex } from 'rebass';

import Pokemon from './Pokemon/Pokemon';

const Pokemons = (props: { pokemons: any; pokedex(...attr: any): () => void}) => {
  const pokemons = props.pokemons.map((pokemon: { name: string; frontImg: string; id: string }) => (
    <Pokemon
      name={pokemon.name}
      frontImg={pokemon.frontImg}
      id={pokemon.id}
      key={`POKEMON__${createHash('sha1').update(`pokeCard${Math.floor(Math.random(0) * 99999999)}`).digest('hex')}.${pokemon.id}__CARD`}
      pokedex={(e: HTMLInputElement | null) => props.pokedex(e, pokemon.id)} />
  ));

  return (
    <Flex flexWrap="wrap"
      alignItems="flex-start"
      justifyContent="flex-start"
      width={1}
      py={5}
      ml={[0, 2 / 12, 2 / 12, 1 / 12]}>
      {pokemons}
    </Flex>
  );
};

export default React.memo(Pokemons);