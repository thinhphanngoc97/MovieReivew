import React, { Component } from 'react';
import '../../assets/scss/Home.scss';
import { connect } from 'react-redux';

class Home extends Component {
    componentDidMount() {
        let {dispatch} = this.props;
        dispatch({type: 'SHOW_HEADER_FOOTER_FULL_OPTION'});
    }

    render() {
        return(
            <div className="container">Home Page</div>
        );
    }
}

export default connect((store) => {
    return {}
})(Home);