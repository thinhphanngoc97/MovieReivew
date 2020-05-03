import React, { Component } from 'react';
import '../assets/scss/Header.scss';
import logo from '../assets/images/play.png';
import {
    NavLink,
  } from "react-router-dom";
import { connect } from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(event) {
        await this.setState({
            keyword: event.target.value
        });
    }

    handleKeyPress(event) {
        if (event.key === "Enter") {
            this.props.history.replace({ pathname: `/search-results/${this.state.keyword}/page-1`});
        }
    }
      
    render() {
        return (
            <div>
                {this.props.headerFooter.isShow &&
                <div className="banner">
                    {/* Navigation bar */}
                    <nav className="navbar sticky-top-navbar navbar-expand-lg navbar-dark bg-dark header-navbar">
                        <div className="container">
                            <NavLink exact to="/" className="navbar-brand">
                                <img src={logo} alt="Logo" />
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                {/* Menu items */}
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <NavLink exact to="/" activeClassName="activated" className="nav-link item">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/movies/popular/page-1" activeClassName="activated" className="nav-link item">Movies</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/about" activeClassName="activated" className="nav-link item">About</NavLink>
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0 centered-form">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search for movies..." aria-label="Search" onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                                    <NavLink className="btn btn-search my-2 my-sm-0" to={`/search-results/${this.state.keyword}/page-1`}>Search</NavLink>
                                </form>
                                {/* <form className="my-2 my-lg-0 ng-pristine ng-valid">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <NavLink to="/login" className="nav-link login-btn item">Log in</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/register" className="btn sign-up-btn">Sign Up</NavLink>
                                        </li>
                                    </ul>
                                </form> */}
                            </div>
                        </div>                 
                    </nav>
                    {/* Header's content. Include introduction, web title, description and quote */}
                    {this.props.headerFooter.headerType === 1 && 
                    <div className="container">
                        <div className="header-content">
                            <div className="header-intro">
                                Introducing
                            </div>
                            <div className="header-title">
                                The Best Movie Review Web Application
                            </div>
                            <div className="header-description">
                                If you’re an entertainment fan looking for a recommendation, or to share an opinion, you’ve come to the right place.
                            </div>
                            <div className="header-quote">
                                "Be <strong>crazy</strong>. Be <strong>stupid</strong>. Be <strong>silly</strong>. Be <strong>weird</strong>. Be <strong>whatever</strong>."
                            </div>
                        </div>
                    </div>}
                </div>}
            </div>
        )
    }
}

export default connect((store) => {
    return {
      headerFooter: store.headerFooter,
    }
})(Header);