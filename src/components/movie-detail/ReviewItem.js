import React, { Component } from 'react';
import '../../assets/scss/Home.scss';
import image from '../../assets/images/user.png';
import ReadMoreAndLess from 'react-read-more-less';

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
                        <div className="card-text">
                        <ReadMoreAndLess
                            charLimit={250}
                            readMoreText="Read more"
                            readLessText="Read less"
                        >
                            {this.props.content}
                        </ReadMoreAndLess>
                        </div>
                   
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewItem;