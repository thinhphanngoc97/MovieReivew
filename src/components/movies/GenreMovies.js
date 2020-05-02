import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/scss/Movies.scss'
import GenreMoviesList from './GenreMoviesList';
import axios from 'axios';
import * as Constant from '../../utils/Constant';
import { NavLink } from "react-router-dom";
import Pagination from "react-js-pagination";

class GenreMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            isLoading: true,
            activePage: 1,
            total: 0,
        }
    }

    async handlePageChange(pageNumber) {
        await this.setState({activePage: pageNumber});
        await this.props.history.replace({ pathname: `/movies/genre/${this.props.match.params.id}/${this.props.match.params.name}/page-${this.state.activePage}`});
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

        // Fetch API to get result total from themoviedb.org 
        axios({
            method: 'GET',
            url: `${Constant.API_URL}/genre/${this.props.match.params.id}/movies`,
            params: {
                api_key: Constant.API_KEY,
                language: Constant.DEFAULT_LANGUAGE
            }
        })
        .then (res => {
            this.setState({
                total: res.data.total_results,
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
                                <div className="card-header card-header-title">
                                    <span>Genres</span>
                                    <a className="dropdown-icon" data-toggle="collapse" href="#collapseGenres" aria-expanded="false" aria-controls="collapseGenres">︾</a>
                                </div>
                                <div className="group-container collapse" id="collapseGenres">
                                    <ul className="list-group list-group-flush">
                                        {!this.state.isLoading &&
                                        this.state.list.map((item, index) => {
                                            return (
                                            <li className="list-group-item" key={index}>
                                                <NavLink activeClassName="activated" className="genre-item" to={`/movies/genre/${item.id}/${item.name}/page-1`}>{item.name}</NavLink>
                                            </li>
                                            )
                                        })}
                                    </ul>
                                </div>  
                            </div>
                            <br/>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                            <GenreMoviesList key={this.state.activePage} page={this.state.activePage} genreId={this.props.match.params.id}/>
                            <div className="pagination-center">
                                <Pagination
                                    activePage={this.state.activePage}
                                    activeLinkClass="activated"
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    itemsCountPerPage={20}
                                    totalItemsCount={this.state.total}
                                    pageRangeDisplayed={5}
                                    onChange={this.handlePageChange.bind(this)}
                                />
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((store) => {
    return {}
})(GenreMovies);