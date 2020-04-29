import React, { Component } from 'react';
import * as Constant from '../../utils/Constant';
import axios from 'axios';
import ReviewItem from './ReviewItem';

class ReviewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            isLoading: true
        }
    }

    componentDidMount() {
        // Fetch API to get reviews list from themoviedb.org 
        axios({
            method: 'GET',
            url: `${Constant.API_URL}/movie/${this.props.movieId}/reviews`,
            params: {
                api_key: Constant.API_KEY,
                language: Constant.DEFAULT_LANGUAGE,
                page: 1
            }
        })
        .then (res => {
            this.setState({
                list: res.data.results,
                isLoading: false
            })
            console.log(this.state.list);
        })
        .catch (err => {
            console.log(err);
        })
    }
    
    render() {
        return (
            <div>
                {!this.state.isLoading &&
                <div className="reviews-container">
                    {
                        this.state.list.map((item, index) => {
                            return <ReviewItem key={index} author={item.author} content={item.content}/>
                        })
                    }
                </div>}
            </div>      
        )
    }
}

export default ReviewsList;