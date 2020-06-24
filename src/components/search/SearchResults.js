import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/scss/Search.scss';
import * as Constant from '../../utils/Constant';
import axios from 'axios';
import Pagination from "react-js-pagination";
import SearchResultList from './SearchResultList';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            activePage: parseInt(props.match.params.page),
            total: 0,
        }
    }

    async handlePageChange(pageNumber) {
        await this.setState({activePage: pageNumber});
        await this.props.history.push({ pathname: `/search-results/${this.props.match.params.keyword}/page-${this.state.activePage}`});
    }

    componentDidMount() {
        // Dispatch action to reducer to hide header's banner
        let {dispatch} = this.props;
        dispatch({type: 'HIDE_BANNER'});

        // Fetch API to get result total from themoviedb.org 
        axios({
            method: 'GET',
            url: `${Constant.API_URL}/search/movie`,
            params: {
                api_key: Constant.API_KEY,
                language: Constant.DEFAULT_LANGUAGE,
                query: this.props.match.params.keyword,
            }
        })
        .then (res => {
            this.setState({
                isLoading: false,
                total: res.data.total_results,
            })
        })
        .catch (err => {
            console.log(err);
        })
    }

    render() {
        return(
            <div className="container">
                <div className="search-result-main-section">
                    <SearchResultList page={this.state.activePage} keyword={this.props.match.params.keyword} total={this.state.total}/>
                    {this.state.total !== 0 && 
                    <div className="pagination-center">
                        <Pagination
                            activePage={this.state.activePage}
                            activeLinkClass="activated"
                            itemClass="page-item"
                            linkClass="page-link"
                            itemsCountPerPage={20}
                            totalItemsCount={this.state.total}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange.bind(this)}
                        />
                    </div>}
                </div>
            </div>
        );
    }
}

export default connect((store) => {
    return {}
})(SearchResult);