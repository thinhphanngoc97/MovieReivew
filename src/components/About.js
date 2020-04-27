import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
    componentDidMount() {
        let {dispatch} = this.props;
        dispatch({type: 'HIDE_BANNER'});
    }

    render() {
        return(
            <div className="container">About Page</div>
        );
    }
}

export default connect((store) => {
    return {}
})(About);