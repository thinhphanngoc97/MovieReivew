import React, { Component } from 'react';
import '../../assets/scss/MovieDetail.scss';

class CastCardItem extends Component {
    render() {
        return (
            <div className="card movie-card-item">
                <div className="card-image">
                    <span><img src={this.props.profileURL} alt={this.props.name} title={this.props.name} /></span>
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