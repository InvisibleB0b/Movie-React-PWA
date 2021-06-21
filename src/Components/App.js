import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import MovieList from './MovieList.js';
import Movie from './Movie.js'
import Search from './Search.js'
import Header from "./Header";

require('./pushregister.js');

class App extends Component {

  render() {

    return (
      <div>
        <Header></Header>

        <div className="container">
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/movies/:id" component={MovieList} />
            <Route path="/movie/:id" component={Movie} />
          </Switch>
        </div>
      </div>
    )


  }

}

export default App;
