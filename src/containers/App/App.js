import React, { Component } from 'react';

import Layout from '../Layout/Layout';

import css from './App.css';

class App extends Component {
  render() {
    return ( 
      <div className={css.App}>
        <Layout />
      </div>
    );
  }
}

export default App;