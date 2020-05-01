import React, { Component } from 'react';
import '../../assets/scss/Home.scss';
import { Link } from "react-router-dom";
import * as Constant from '../../utils/Constant';
import movieThumb from '../../assets/images/thumb-movie.jpg';

class MovieCardItem extends Component {
    render() {
        return (
            <div className="card movie-card-item">
                <div className="card-image">
                    <Link to={`/movie-detail/${this.props.id}/${this.props.name}`}><img src={this.props.posterPath === null ? movieThumb : `${Constant.POSTER_URL}${this.props.posterPath}`} alt={this.props.name} title={this.props.name} /></Link>
                </div>
                <div className="card-content">
                    <div className="score-average">{this.props.score}</div>
                    <Link to={`/movie-detail/${this.props.id}/${this.props.name}`}>{this.props.name}</Link>
                    <p>{this.props.releaseDay}</p>
                </div>
            </div>
        )
    }
}

export default MovieCardItem;