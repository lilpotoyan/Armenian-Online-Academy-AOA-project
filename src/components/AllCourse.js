import React, { Component } from "react";
import "../styles/AllCourses.css";

class AllCourse extends Component {
  render() {
    const { image, name, subject, length } = this.props.details;
    console.log(this.props);
    return (
      <div className="allcourse-card">
        <img src={image} alt="Img" />
        <div className="course-title">
          <p className="courseName">{name}</p>
          <p>Subject: {subject}</p>
          <p>Length: {length}</p>
        </div>
      </div>
    );
  }
}

export default AllCourse;
