import React from 'react';

import Icons from '../UI/Icons/Icons';
import Pokeball from '../UI/Img/Pokeball/Pokeball';

import css from './SearchBar.css';

class SearchBar extends React.Component {
  inputElementRef = React.createRef();

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render () {
    return (
      <section className={css.Section2}>
          <div className={css.SearchBar}>
            <Pokeball className={css.Pokeball} />
            <div className={"input-field " + css.Search}>
              <input
                ref={ this.inputElementRef }
                onChange={this.props.filter}
                type="text"
                id="searchP" />
              <label
                htmlFor="searchP">Search Pokémon</label>
              <span onClick={this.props.clear}>
                <Icons
                  type="fa" 
                  icon="times" />
              </span>
            </div>
          </div>
      </section>
    );
    }
};

export default React.memo(SearchBar);