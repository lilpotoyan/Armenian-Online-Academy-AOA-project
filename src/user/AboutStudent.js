import React, { Component } from "react";
import "../styles/aboutStudent.css";
import { ConnectToUser } from "../context/ConnectUser";

class AboutStudent extends Component {
  render() {
    console.log(this.props.user);
    return (
      <div className="student-content">
        <div className="std-about-content">
          <div className="std-about-coutent-information">
            <div>
              <div>
                <p>{this.props.user.specialization}</p>
              </div>
              <div>
                <p>Firstname: {this.props.user.firstName}</p>
              </div>
              <div>
                <p>Lastname: {this.props.user.lastName}</p>
              </div>
              <div>
                <p>Email: {this.props.user.email}</p>
              </div>
              <div>
                <p>Phone: {this.props.user.phone}</p>
              </div>
              <div>
                <p>
                  Birthday: {this.props.user.day} - {this.props.user.months} -{" "}
                  {this.props.user.year}
                </p>
                <p>Country: {this.props.user.country}</p>
                <p>City: {this.props.user.city}</p>
              </div>
            </div>
          </div>
          <div className="std-about-coutent-description">
            <div className="std-about-content-descr">
              <div className="std-about-me-coutent-description">About me</div>
              <div className="std-about-me-text-coutent-description">
                {this.props.user.about}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConnectToUser(AboutStudent);
