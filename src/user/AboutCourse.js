import React, { Component } from "react";
import "../styles/aboutCourse.css";
import { ConnectToUser } from "../context/ConnectUser";
import fire from "../config/Fire";
import Loading from "../img/loading.svg";
import goBack from "../img/goBackIcon.svg";

class AboutCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enrollCourse: null,
      enroled: false
    };
  }

  componentDidMount() {
    fire
      .database()
      .ref("AllCourses/" + this.props.match.params.id)
      .on("value", snapshot => {
        console.log(this.props.match.params.id);
        this.setState({ enrollCourse: snapshot.val() });
      });
  }

  enrollCourse = e => {
    e.preventDefault();
    this.setState({ enroled: true });
    fire
      .database()
      .ref("users/")
      .child(this.props.user.id + "/course/" + this.state.enrollCourse.id + "/")
      .set(this.state.enrollCourse);
  };

  render() {
    console.log(this.props.user);
    const course = this.state.enrollCourse;
    const courseid = this.props.match.params.id;
    return course ? (
      <div>
        <div
          className="about-course-back"
          style={{ cursor: "pointer" }}
          onClick={this.props.history.goBack}
        >
          <img src={goBack} alt="goBack" />
        </div>
        <div className="about-course">
          <div className="aboutcourse-img">
            <img src={course.image} alt="logo" />
          </div>
          <div className="infoaboutcourse">
            <h1 className="aboutcourse-name">{course.name}</h1>
            <div className="course-intro">{course.intro}</div>
          </div>
          { this.props.user.type === "tutor" ? null:
            <button type="button" onClick={this.enrollCourse}>
        
            {this.props.user.course.hasOwnProperty(courseid) ||
            this.state.enroled
              ? "ENROLED"
              : " ENROLL NOW"}
          </button>
          }
          
        </div>
        <div className="content-sidebar">
          <div className="about-this-cours-content">
            <div className="about-this-cours">
              <h2>About this course</h2>
            </div>
            <div className="about-this-cours-text">
              <p>{course.aboutthiscourse}</p>
            </div>
            <div className="about-this-cours-tutor">
              <h3>Tutor</h3>
              <p>{course.tutor}</p>
            </div>
          </div>
          <div className="about-cours-list">
            <ul>
              <li>Length: {course.length}</li>
              <li>Effort: {course.effort}</li>
              <li>Price: {course.price}</li>
              <li>Subject: {course.subject}</li>
              <li>Language: {course.language}</li>
              <li>Tutor: {course.tutor}</li>
              <li>Level: {course.level}</li>
            </ul>
          </div>
        </div>
      </div>
    ) : (
      <div className="loading">
        <img src={Loading} alt="Loading" />
      </div>
    );
  }
}

export default ConnectToUser(AboutCourse);
