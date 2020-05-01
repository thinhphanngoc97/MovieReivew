import React, { Component } from 'react';
import '../../assets/scss/MovieDetail.scss';
import * as Constant from '../../utils/Constant';
import thumb from '../../assets/images/thumb.jpg';

class CastCardItem extends Component {
    render() {
        return (
            <div className="card movie-card-item">
                <div className="card-image">
                    <span><img src={this.props.profilePath === null ? thumb : `${Constant.POSTER_URL}${this.props.profilePath}`} alt={this.props.name} title={this.props.name} /></span>
                </div>
                <div className="card-content">
                    <span>{this.props.name}</span>
                    <p>{this.props.character}</p>
                </div>
            </div>
        )
    }
}

export default CastCardItem;