import React, { Component } from 'react';
import {
    Route,
    Switch,
  } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Movies from './components/movies/Movies';
import NotAvailable from './components/NotAvailable';
import MovieDetail from './components/movie-detail/MovieDetail';
import GenreMovies from './components/movies/GenreMovies';

class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path='/movie-detail/:id/:name' render={(props) => (<MovieDetail key={props.match.params.id} {...props} />)} />
                <Route path="/about" component={About} />
                <Route path="/movies/genre/:id/:name" component={GenreMovies} />
                <Route path="/movies" component={Movies} />
                <Route path="/login" component={NotAvailable} />
                <Route path="/register" component={NotAvailable} />
                <Route path="/not-available" component={NotAvailable} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default Routes;