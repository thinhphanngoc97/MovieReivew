import React, { Component } from 'react';
import * as Constant from '../../utils/Constant';
import axios from 'axios';
import MovieCardItem from '../home/MovieCardItem';

class SearchResultList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            isLoading: true
        }
    }

    componentDidMount() {
        // Fetch API to get result list from themoviedb.org 
        axios({
            method: 'GET',
            url: `${Constant.API_URL}/search/movie`,
            params: {
                api_key: Constant.API_KEY,
                language: Constant.DEFAULT_LANGUAGE,
                query: this.props.keyword,
                page: this.props.page
            }
        })
        .then (res => {
            this.setState({
                list: res.data.results,
                isLoading: false,
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
                (
                    this.props.total === 0 ? <h5 className="section-title">We can not find any matching movies...</h5> :
                    <div>
                        <h5 className="section-title">{`Results for "${this.props.keyword}":`}</h5>
                        <div className="movies-list-section">
                            {
                                this.state.list.map((item, index) => {
                                    if (item.vote_average === 0) { 
                                        item.vote_average = 'N/A'; 
                                    };
                                    return <MovieCardItem key={index} id={item.id} name={item.title} posterPath={item.poster_path} releaseDay={item.release_date} score={item.vote_average}/>
                                })
                            }
                        </div>
                    </div>
                )}
            </div>      
        )
    }
}

export default SearchResultList;