import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    // Add scroll event listener after App component was mounted
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 0) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <Router>
        <div className="App">
          <Header />
          {/* Content body. Config at routes.js */}
          <Routes />
          <Footer />
          {/* Scroll to top button */}
          {is_visible && <div className="scroll-to-top fa fa-arrow-up" onClick={() => this.scrollToTop()}></div>}
        </div>
      </Router>
    );
  }
}

export default connect((store) => {
  return {
    // is_visible
  }
})(App);
