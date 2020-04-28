import React, { Component } from 'react';
import '../../assets/scss/Home.scss';
import { connect } from 'react-redux';
import PopularMoviesList from './PopularMoviesList';
import TrendingMoviesList from './TrendingMoviesList';
import TopRatedMoviesList from './TopRatedMoviesList';
import UpcomingMoviesList from './UpcomingMoviesList';

class Home extends Component {
    componentDidMount() {
        // Dispatch action to reducer to show header and footer will full option
        let {dispatch} = this.props;
        dispatch({type: 'SHOW_HEADER_FOOTER_FULL_OPTION'});
    }

    render() {
        return(
            <div className="container">
                <div className="main-section">
                    <h4 className="section-title">What's Popular</h4>
                    <PopularMoviesList/>
                    <br/>
                    <h4 className="section-title">Trending</h4>
                    <TrendingMoviesList/>
                    <br/>
                    <h4 className="section-title">Top rated</h4>
                    <TopRatedMoviesList/>
                    <br/>
                    <h4 className="section-title">Upcoming</h4>
                    <UpcomingMoviesList/>
                    <br/>
                    {/* <h4 className="section-title">Latest Trailers</h4> */}
                </div>
            </div>
        );
    }
}

export default connect((store) => {
    return {}
})(Home);