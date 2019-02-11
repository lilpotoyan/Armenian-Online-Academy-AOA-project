import React, { Component } from "react";
import "../styles/course.css";


class Course extends Component {
  render() {
    return (
        <div className="course-card">          
          <div
            style={{ background: `url(${this.props.details.image}` }}
            className="course-card-img"
          >
            <div className="course-card-sub">
              <p >{this.props.details.name}</p>
            </div>
          </div>
        </div>

    );
  }
}

export default Course;
