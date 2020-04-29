import React, { Component } from 'react';
import '../../assets/scss/Home.scss';
import image from '../../assets/images/user.png';

class ReviewItem extends Component {
    render() {
        return (
            <div className="card review-item">
                <div className="card-body">
                    <div className="row">
                        <span className="user-icon"><img src={image} alt={this.props.author} /></span>
                        <h5 className="card-title font-weight-bold">{this.props.author}</h5>
                    </div>
                    <div className="row">
                        <p className="card-text">{this.props.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewItem;