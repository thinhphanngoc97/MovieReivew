import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/scss/About.scss';
import image from '../assets/images/boss.jpg';

class About extends Component {
    componentDidMount() {
        // Dispatch action to reducer to hide header's banner
        let {dispatch} = this.props;
        dispatch({type: 'HIDE_BANNER'});
    }

    render() {
        return(
            <div className="container">
                <div className="main-section main-section-about">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="card floating-card">
                                <img className="profile-image" src={image} alt="It's me" title="It's me"/>
                            </div>
                            <br/>
                            <div className="card floating-card">
                                <div className="card-body">
                                    <h4 className="font-weight-bold">Personal Info</h4>
                                    <div>
                                        <strong>Gender</strong>
                                    </div>
                                    <p>Male</p>
                                    <div>
                                        <strong>Birthday</strong>
                                    </div>
                                    <p>1997-01-04</p>
                                    <div>
                                        <strong>Place of Birth</strong>
                                    </div>
                                    <p>Dak Lak</p>
                                    <div>
                                        <strong>Interests</strong>
                                    </div>
                                    <p>Movie, Music, Travel...</p>
                                </div>
                            </div>
                            <br/>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="card floating-card">
                                <div className="card-body">
                                    <h2 className="font-weight-bold">Thinh Phan Ngoc</h2>
                                    <div>
                                        <strong>Web Developer</strong>
                                    </div>
                                    <br/>
                                    <p>I am a simple, creative, enthusiastic and fun-loving person. I always like to create something on my own which is helpful for others.</p>
                                    <p>My objective is constantly improving programming skills and understanding of technologies to become a professional web developer. Hence I am always looking for opportunities to work in a challenging work environment where I can utilize my expertise, towards the development and implementation of the new ideas.</p>
                                </div>
                            </div>
                            <br/>
                            <h4>Activities</h4>
                            <div className="card floating-card">
                                <div className="card-body">
                                    <h4 className="font-weight-bold">Education</h4>
                                    <strong>University of Information Technology</strong>
                                    <div>Aug 2015 - Present</div>
                                    <div>
                                        <strong>Major: </strong>
                                        <span>Software Engineering</span>
                                    </div>
                                    <br/>
                                    <br/>
                                    <h4 className="font-weight-bold">Work Experience</h4>
                                    <strong>Nichietsu System Development</strong>
                                    <div>Mar 2019 - May 2019</div>
                                    <div>
                                        <strong>Position: </strong>
                                        <span>Web Application Developer</span>
                                    </div>
                                    <br/>
                                    <strong>TMA Solutions</strong>
                                    <div>Mar 2020 - May 2020</div>
                                    <div>
                                        <strong>Position: </strong>
                                        <span>Quality Assurance Engineer</span>
                                    </div>
                                    <br/>
                                    <strong>BeeSight Soft</strong>
                                    <div>May 2020 - Present</div>
                                    <div>
                                        <strong>Position: </strong>
                                        <span>Web Application Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((store) => {
    return {}
})(About);