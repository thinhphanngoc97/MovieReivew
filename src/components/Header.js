import React, { Component } from 'react';
import '../assets/scss/Header.scss';
import logo from '../assets/images/play.png';
import {
    NavLink,
  } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                {this.props.isShow === true &&
                <div className="banner">
                    {/* Navigation bar */}
                    <nav className="navbar sticky-top-navbar navbar-expand-lg navbar-dark bg-dark header-navbar">
                        <div className="container">
                            {/* Brand logo */}
                            {/* <a className="navbar-brand" href="/">
                                <img src={logo} alt="Logo" />
                            </a> */}
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
                                        <NavLink to="/about" activeClassName="activated" className="nav-link item">About</NavLink>
                                    </li>
                                </ul>
                                <form className="my-2 my-lg-0 ng-pristine ng-valid">
                                    <ul className="navbar-nav">
                                        {/* Login */}
                                        <li className="nav-item">
                                            <a href="/login" className="nav-link login-btn item">Log in</a>
                                        </li>
                                        {/* Sign up  */}
                                        <li className="nav-item">
                                            <a href="/register" className="btn sign-up-btn">Sign Up</a>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>                 
                    </nav>
                    {/* Header's content. Include introduction, web title, description and quote */}
                    {this.props.type === 1 && 
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

export default Header;