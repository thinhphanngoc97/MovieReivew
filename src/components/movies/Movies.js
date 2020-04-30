import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/scss/Movies.scss'
import MoviesList from './MoviesList';
import axios from 'axios';
import * as Constant from '../../utils/Constant';
import { NavLink } from "react-router-dom";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            isLoading: true
        }
    }

    componentDidMount() {
        // Dispatch action to reducer to hide header's banner
        let {dispatch} = this.props;
        dispatch({type: 'HIDE_BANNER'});

        // Fetch API to get genres list from themoviedb.org 
        axios({
            method: 'GET',
            url: `${Constant.API_URL}/genre/movie/list`,
            params: {
                api_key: Constant.API_KEY,
                language: Constant.DEFAULT_LANGUAGE
            }
        })
        .then (res => {
            this.setState({
                list: res.data.genres,
                isLoading: false
            })
        })
        .catch (err => {
            console.log(err);
        })
    }

    render() {
        return(
            <div className="container">
                <div className="movies-main-section">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="card genre-selection-card">
                                <div className="card-header">
                                    <strong>Genres</strong>
                                </div>
                                <div className="group-container">
                                    <ul className="list-group list-group-flush">
                                        {!this.state.isLoading &&
                                        this.state.list.map((item, index) => {
                                            return (
                                            <li className="list-group-item" key={index}>
                                                <NavLink activeClassName="activated" className="genre-item" to={`/movies/genre/${item.id}/${item.name}`}>{item.name}</NavLink>
                                            </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <br/>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                            <MoviesList/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((store) => {
    return {}
})(Movies);