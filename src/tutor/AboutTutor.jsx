import React, { Component } from "react";
import '../styles/tutorProfile.css';
import { ConnectToUser } from '../context/ConnectUser';

class AboutTutor extends Component {
    render() {
        console.log(this.props.user);
        return (
            <div className="tutor-content">
                <div className="tut-content">
                    <div className="about-the-instructor">
                        <h1>About the instructor</h1>
                        <p>{this.props.user.firstName}</p>
                        <p>{this.props.user.email}</p>
                        <p>{this.props.user.phone}</p>
                        <p>{this.props.user.country} {this.props.user.city}</p>
                        <p>{this.props.user.day}-{this.props.user.months}-{this.props.user.year}</p>
                        <p>{this.props.user.specialization}</p>
                    </div>
                    <div>
                        <p>{this.props.user.firstName} {this.props.user.lastName}</p>
                        <h3>Web Developer, Designer, and Teacher</h3>
                        <p>Hi, I'm Lilit! I have been identified as one of Udemy's Top Instructors and all my premium courses have recently earned the best-selling status for outstanding performance and student satisfaction.

                        Do you want to learn how to build awesome websites with advanced HTML and CSS?

                        Want to know how to make your websites look beautiful and professional?

                        Looking for a complete JavaScript course that takes you from beginner to advanced developer?

                        Then enrol in my courses today and join 320,000+ happy students. If I had to describe each of my courses in one sentence, I would say “This is exactly the course I wish I had when I first started building websites".

                            Because happy students make me happy too!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConnectToUser(AboutTutor);