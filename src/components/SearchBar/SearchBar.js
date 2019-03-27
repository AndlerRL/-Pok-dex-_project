import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Icons from '../UI/Icons/Icons';

import css from './SearchBar.css';

class SearchBar extends React.Component {
  inputElementRef = React.createRef();

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render () {
    return (
      <Aux>
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
      </Aux>
    );
    }
};

export default React.memo(SearchBar);