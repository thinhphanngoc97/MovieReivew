import React, { Component } from 'react';
import '../assets/scss/NotFound.scss';
import {
    NavLink,
  } from "react-router-dom";
import { connect } from 'react-redux';

class NotAvailable extends Component {
    componentDidMount() {
        // Dispatch action to reducer to hide header and footer
        let {dispatch} = this.props;
        dispatch({type: 'HIDE_HEADER_FOOTER'});
    }

    render() {
        return(
            <div className="not-found">
                <div className="card not-found-card">
                    <div className="card-body text-center">
                        <h2 className="not-found-title">This feature is not available!</h2>
                        <div className="not-found-404">@.@</div>
                        <p>
                            This feature has not implemented yet. Please go back to previous page or home page.
                        </p>
                        <br/>
                        <NavLink exact to="/" className="btn return-btn">Go back to home page</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((store) => {
    return {}
})(NotAvailable);