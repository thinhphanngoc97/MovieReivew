import React, { Component } from 'react';
import {
    Route,
    Switch,
  } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Movies from './components/movies/Movies';

class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/movies" component={Movies} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default Routes;