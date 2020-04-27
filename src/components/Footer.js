import React, { Component } from 'react';
import '../assets/scss/Footer.scss';
import {
    Link,
  } from "react-router-dom";
import { connect } from 'react-redux';

class Footer extends Component {
    render() {
        return (
            <div>
                {this.props.headerFooter.isShow &&
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-6">
                                <div className="footer-column-title">NAVIGATE</div>
                                <div className="footer-column-content">
                                    <ul>
                                        <li>
                                            <Link to="/" className="nav-link-nav">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about" className="nav-link-nav">About</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-6">
                                <div className="footer-column-title">SOCIALS</div>
                                <div className="footer-column-content">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank" className="nav-link-icon-in-fb">Facebook</a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank" className="nav-link-icon-in-ins">Instagram</a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank" className="nav-link-icon-in-yt">Youtube</a>
                                        </li>   
                                        <li>
                                            <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank" className="nav-link-icon-in-li">LinkedIn</a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank" className="nav-link-icon-in-tw">Twitter</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-6">
                                <div className="footer-column-title">CONTACT</div>
                                <div className="footer-column-content contact-info">
                                    <div>
                                        <strong>Thinh Phan Ngoc</strong>
                                    </div>
                                    <div>
                                        <a href="mailto:thinhphanngoc97@gmail.com">thinhphanngoc97@gmail.com</a>
                                    </div>
                                    <div>
                                        <p>Phone: (+84) 98 869 03 45</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-6">
                                <div className="footer-column-title">ADDRESS</div>
                                <div className="footer-column-content">
                                    <p className="address">Street 3, Ward 9, Go Vap District, Ho Chi Minh City</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center copy-right">© 2020 Corydoras</div>
                </div>}
            </div>
        );
    }
}

export default connect((store) => {
    return {
      headerFooter: store.headerFooter,
    }
})(Footer);