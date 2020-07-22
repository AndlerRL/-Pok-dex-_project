import React, { useRef, useEffect } from 'react';

import Icons from '../UI/Icons/Icons';
import Pokeball from '../UI/Img/Pokeball/Pokeball';

import css from '../../css/SearchBar.css';

const SearchBar = (props: { filter(...attr: any): () => void; clear(): () => void }) => {
  const inputElementRef = useRef(null) as any;

  useEffect(() => {
    if (inputElementRef)
      inputElementRef.current.focus();
  }, [inputElementRef])

  return (
    <section className={css.Section2}>
        <div className={css.SearchBar}>
          <Pokeball className={css.Pokeball} />
          <div className={"input-field " + css.Search}>
            <input
              ref={(e: HTMLInputElement | null) => inputElementRef.current = e}
              onChange={props.filter}
              type="text"
              id="searchP" />
            <label
              htmlFor="searchP">Search Pokémon</label>
            <span onClick={props.clear}>
              <Icons
                type="fa" 
                icon="times" />
            </span>
          </div>
        </div>
    </section>
  );
};

export default React.memo(SearchBar);