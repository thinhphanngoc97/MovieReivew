import React, { Component } from 'react';
import * as Constant from '../../utils/Constant';
import axios from 'axios';
import CastCardItem from './CastCardItem';

class TopBilledCastList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            isLoading: true
        }
    }

    componentDidMount() {
        // Fetch API to get top billed cast list from themoviedb.org 
        axios({
            method: 'GET',
            url: `${Constant.API_URL}/movie/${this.props.movieId}/credits`,
            params: {
                api_key: Constant.API_KEY
            }
        })
        .then (res => {
            this.setState({
                list: res.data.cast,
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
                            return <CastCardItem key={index} name={item.name} character={item.character} profileURL={`${Constant.POSTER_URL}${item.profile_path}`}/>
                        })
                    }
                </div>}
            </div>      
        )
    }
}

export default TopBilledCastList;