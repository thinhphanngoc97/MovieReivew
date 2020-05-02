import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Constant from '../../utils/Constant';
import '../../assets/scss/MovieDetail.scss';
import axios from 'axios';
import SimilarMoviesList from './SimilarMoviesList';
import TopBilledCastList from './TopBilledCastList';
import ReviewsList from './ReviewsList';
import { Link } from "react-router-dom";
import TrailersList from './TrailersList';
import Pagination from "react-js-pagination";

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieInfo: null,
            isLoading: true,
            totalReview: 0,
            activePage: 1,
        }
    }

    async handlePageChange(pageNumber) {
        await this.setState({activePage: pageNumber});
    }

    componentDidMount() {
        // Dispatch action to reducer to hide header's banner
        let {dispatch} = this.props;
        dispatch({type: 'HIDE_BANNER'});
        
        // Fetch API to get movie detail from themoviedb.org 
        axios({
            method: 'GET',
            url: `${Constant.API_URL}/movie/${this.props.match.params.id}`,
            params: {
                api_key: Constant.API_KEY,
                language: Constant.DEFAULT_LANGUAGE
            }
        })
        .then (res => {
            this.setState({
                movieInfo: res.data,
                isLoading: false
            })
        })
        .catch (err => {
            console.log(err);
        })

        // Fetch API to get reviews total from themoviedb.org 
        axios({
            method: 'GET',
            url: `${Constant.API_URL}/movie/${this.props.match.params.id}/reviews`,
            params: {
                api_key: Constant.API_KEY,
                language: Constant.DEFAULT_LANGUAGE
            }
        })
        .then (res => {
            this.setState({
                totalReview: res.data.total_results,
                isLoading: false
            })
        })
        .catch (err => {
            console.log(err);
        })
    }

    render() {
        return(
            <div>
                {!this.state.isLoading &&
                    <div className="container">
                        {/* Movie's backdrop */}
                        <div className="movie-backdrop" style={{backgroundImage: `url(${Constant.BACKDROP_URL}${this.state.movieInfo.backdrop_path})`}}></div>
                        <div className="main-section">
                            <div className="row">
                                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                                    {/* Main detail of movie */}
                                    <div className="card movie-main-detail">
                                        <div className="card-body">
                                            <div className="movie-score">{this.state.movieInfo.vote_average === 0 ? 'N/A' : this.state.movieInfo.vote_average}</div>
                                            <div>
                                                {/* Movie's title */}
                                                <Link className="movie-title" to={`/movie-detail/${this.state.movieInfo.id}/${this.state.movieInfo.title}`}>{this.state.movieInfo.title}</Link>
                                                {/* Release day */}
                                                <span className="movie-release-day">{` (${this.state.movieInfo.release_date})`}</span>
                                            </div>
                                            <div>
                                                {/* Genres */}
                                                <span>
                                                {
                                                    this.state.movieInfo.genres.map((item, index) => {
                                                        return <Link key={index} className="movie-genre" to={`/movies/genre/${item.id}/${item.name}/page-1`}>{`${item.name} `}</Link>;
                                                    })
                                                }
                                                </span>
                                            </div>
                                            <br/>
                                            <p>
                                                <strong>Runtime: </strong>
                                                <span>{`${this.state.movieInfo.runtime} Minutes`}</span>
                                            </p>
                                            {/* Overview */}
                                            <div>
                                                <strong>Overview: </strong>
                                                <span>{this.state.movieInfo.overview}</span>
                                            </div>
                                            {/* <div className="option-list">
                                                <span className="option option-add-to-watch-list"></span>
                                                <span className="option option-mark-as-favorite"></span>
                                                <span className="option option-rate"></span>
                                                <span className="option option-share"></span>
                                            </div> */}
                                        </div>
                                    </div>
                                    <br/>
                                    <h4 className="section-title">Top Billed Cast</h4>
                                    <TopBilledCastList movieId={this.props.match.params.id}/>
                                    <br/>
                                    <h4 className="section-title">Reviews</h4>
                                    <ReviewsList movieId={this.props.match.params.id} page={this.state.activePage} key={this.state.activePage}/>
                                    <div className="pagination-center-movie-detail">
                                        <Pagination
                                            activePage={this.state.activePage}
                                            activeLinkClass="activated"
                                            itemClass="page-item"
                                            linkClass="page-link"
                                            itemsCountPerPage={20}
                                            totalItemsCount={this.state.totalReview}
                                            pageRangeDisplayed={5}
                                            onChange={this.handlePageChange.bind(this)}
                                        />
                                    </div>    
                                    <br/>
                                    <h4 className="section-title">Trailers</h4>
                                    <TrailersList movieId={this.props.match.params.id}/>
                                    <br/>
                                    <h4 className="section-title">Similar movies</h4>
                                    <SimilarMoviesList movieId={this.props.match.params.id}/>
                                    <br/>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                    <div className="card movie-additional-detail">
                                        <div className="card-body">
                                            <div>
                                                <strong>Budget</strong>
                                            </div>
                                            <p>{this.state.movieInfo.budget === 0 ? 'N/A' : `$${this.state.movieInfo.budget}`}</p>
                                            <div>
                                                <strong>Revenue</strong>
                                            </div>
                                            <p>{this.state.movieInfo.revenue === 0 ? 'N/A' : `$${this.state.movieInfo.revenue}`}</p>
                                            <div>
                                                <strong>Vote count</strong>
                                            </div>
                                            <p>{this.state.movieInfo.vote_count === 0 ? 'N/A' : this.state.movieInfo.vote_count}</p>
                                            <div>
                                                <strong>Popularity</strong>
                                            </div>
                                            <p>{this.state.movieInfo.popularity === 0 ? 'N/A' : this.state.movieInfo.popularity}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        );
    }
}

export default connect((store) => {
    return {}
})(MovieDetail);