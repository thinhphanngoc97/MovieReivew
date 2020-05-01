import React, { Component } from 'react';
import * as Constant from '../../utils/Constant';
import axios from 'axios';
import MovieCardItem from '../home/MovieCardItem';

class GenreMoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            isLoading: true
        }
    }

    componentDidMount() {
        // Fetch API to get movies list by genreId from themoviedb.org 
        axios({
            method: 'GET',
            url: `${Constant.API_URL}/genre/${this.props.genreId === undefined ? '28' : this.props.genreId}/movies`,
            params: {
                api_key: Constant.API_KEY,
                language: Constant.DEFAULT_LANGUAGE,
                page: 1,
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
                <div className="movies-list-section">
                    {
                        this.state.list.map((item, index) => {
                            if (item.vote_average === 0) { 
                                item.vote_average = 'N/A'; 
                            };
                            return <MovieCardItem key={index} id={item.id} name={item.title} posterPath={item.poster_path} releaseDay={item.release_date} score={item.vote_average}/>
                        })
                    }
                </div>}
            </div>      
        )
    }
}

export default GenreMoviesList;