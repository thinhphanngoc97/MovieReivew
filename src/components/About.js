import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
    componentDidMount() {
        // Dispatch action to reducer to hide header's banner
        let {dispatch} = this.props;
        dispatch({type: 'HIDE_BANNER'});
    }

    render() {
        return(
            <div className="container">
                <div className="main-section">
                    <div>About Page</div>
                </div>
            </div>
        );
    }
}

export default connect((store) => {
    return {}
})(About);