import React, { Component } from 'react';
import * as Constant from '../../utils/Constant';
import axios from 'axios';
import YouTube from 'react-youtube';

class TrailersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            isLoading: true
        }
    }

    componentDidMount() {
        // Fetch API to get trailers list from themoviedb.org 
        axios({
            method: 'GET',
            url: `${Constant.API_URL}/movie/${this.props.movieId}/videos`,
            params: {
                api_key: Constant.API_KEY,
                language: Constant.DEFAULT_LANGUAGE
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
        const opts = {
            height: '200',
            width: 'auto',
            playerVars: {
              autoplay: 0,
            },
          };

        return (
            <div>
                {!this.state.isLoading &&
                <div className="trailers-list">
                    {
                        this.state.list.map((item, index) => {
                            return <YouTube className="youtube-trailer" key={index} videoId={item.key} opts={opts} onReady={this._onReady} />
                        })
                    }
                </div>}
            </div>      
        )
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default TrailersList;