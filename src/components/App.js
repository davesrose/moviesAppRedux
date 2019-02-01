import React, { Component } from 'react';

import MovieResults from './MovieResults';
import Search from './Search';
import FavoriteMovieList from './FavoriteMovieList';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="jumbotron">
            <h1>Movies App!</h1>
            <p>Save your favorite movies</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <Search />
        </div>
        <hr />
        <div className="row">
          <Router>
            <Switch>
              <Route exact path="/" component={MovieResults} />
              <Route path="/fav" component={FavoriteMovieList} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;