import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Constant from '../../utils/Constant';
import '../../assets/scss/MovieDetail.scss';
import axios from 'axios';
import SimilarMoviesList from './SimilarMoviesList';
import TopBilledCastList from './TopBilledCastList';
import ReviewsList from './ReviewsList';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieInfo: null,
            isLoading: true
        }
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
            console.log(this.state.movieInfo);
        })
        .catch (err => {
            console.log(err);
        })
    }

    render() {
        return(
            <div>
                {!this.state.isLoading &&
                <div>
                    <div className="movie-banner">
                        {/* <img className="movie-backdrop" src={`${Constant.BACKDROP_URL}/${this.state.movieInfo.backdrop_path}`} alt={this.state.movieInfo.title} title={this.state.movieInfo.title} /> */}
                    </div>
                    <div className="container">
                        <div className="main-section">
                            <div className="row">
                                <div className="col-9">
                                    <h4 className="section-title">Top Billed Cast</h4>
                                    <TopBilledCastList movieId={this.props.match.params.id}/>
                                    <br/>
                                    <h4 className="section-title">Reviews</h4>
                                    <ReviewsList movieId={this.props.match.params.id}/>
                                    <br/>
                                    <h4 className="section-title">Similar movies</h4>
                                    <SimilarMoviesList movieId={this.props.match.params.id}/>
                                </div>
                                <div className="col-3">
                                    <div>aaa</div>
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