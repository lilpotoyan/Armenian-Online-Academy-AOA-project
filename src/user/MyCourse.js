import React, { Component } from "react";
import "../styles/mycourses.css";

class MyCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="mycourse-card">
            <span style={{ background: `url(${this.props.details.image}` }} className="mycourse-card-img" />
              <div className="mycourse-card-sub">
                <p>{this.props.details.name}</p>
                <div className="mycourses-card-price">
                    {this.props.details.price}
                </div>
              </div>
        </div>
    );
  }
}

export default MyCourse;
