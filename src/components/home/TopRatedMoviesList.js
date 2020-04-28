import React, { Component } from 'react';
import * as Constant from '../../utils/Constant';
import axios from 'axios';
import MovieCardItem from './MovieCardItem';

class TopRatedMoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            isLoading: true
        }
    }

    componentDidMount() {
        // Fetch API to get top rated movies list from themoviedb.org 
        axios({
            method: 'GET',
            url: `${Constant.API_URL}/movie/top_rated`,
            params: {
                api_key: Constant.API_KEY,
                language: Constant.DEFAULT_LANGUAGE,
                page: 1,
                region: Constant.DEFAULT_REGION
            }
        })
        .then (res => {
            this.setState({
                list: res.data.results,
                isLoading: false
            })
        })
        .catch (err => {
            console.log(err);
        })
    }
    
    render() {
        return (
            <div>
                {!this.state.isLoading &&
                <div className="popular-section">
                    {
                        this.state.list.map((item, index) => {
                            return <MovieCardItem key={index} name={item.title} posterURL={`${Constant.POSTER_URL}${item.poster_path}`} releaseDay={item.release_date} score={item.vote_average}/>
                        })
                    }
                </div>}
            </div>      
        )
    }
}

export default TopRatedMoviesList;