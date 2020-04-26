import React, { Component } from 'react';
import '../assets/scss/NotFound.scss';
import {
    NavLink,
  } from "react-router-dom";

class NotFound extends Component {
    render() {
        return(
            <div className="not-found">
                <div className="card not-found-card">
                    <div className="card-body text-center">
                        <h2 className="not-found-title">Looks like you are lost!</h2>
                        <div className="not-found-404">404</div>
                        <p>
                            We couldn’t find the page you were looking for. So please stay calm! Get something to drink or search again the website.
                        </p>
                        <br/>
                        <NavLink exact to="/" className="btn return-btn">Go back to home page</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;