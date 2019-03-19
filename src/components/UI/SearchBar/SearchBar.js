import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Icons from '../Icons/Icons';

import css from './SearchBar.css';

const searchBar = props => {
  return (
    <Aux>
      <div className={"input-field " + css.Search}>
        <input
          onChange={props.searchP}
          type="text" />
        <label
          htmlFor="searchP"
          className="white-text">Search Pokémon</label>
        <Icons 
          icon="times"
          onClick={props.clear} />
      </div>
    </Aux>
  );
};

export default searchBar;