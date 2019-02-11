import React, { Component } from "react";
import "../styles/tutorProfile.css";
import Logo from "../img/AOA1.png";
import NoteBook from "../img/notebook.svg";
import { NavLink } from "react-router-dom";
import StudentSettings from "./StudentSettings";
import { ConnectToUser } from "../context/ConnectUser";
import fire from "../config/Fire";
import Footer from "./footer";
import Tutor from "../tutor/Tutor";
import TutorSvg from "../img/male.svg";
import AddCourse from "../img/add.svg";
import { connectTranslations } from "../context/TranslationContext";

class TutorProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = () => {
    fire.auth().signOut();
  };

  render() {
    console.log(this.props);
    const {
      courses,
      tutors,
      myCourses,
      logOut,
      settings
    } = this.props.texts.student;
    return (
      <div className="tutor-page">
        <div className="tutor-header">
          <div className="tut-prof-logo">
            <img
              src={Logo}
              style={{ width: "75px", height: "50px" }}
              alt="Logo"
            />
          </div>
          <div className="tut-page-nav">
            <NavLink to="/mycourses">
              <div>
                <img src={NoteBook} alt="book" />
                <span> My Courses</span>
              </div>
            </NavLink>
            <NavLink to="/addcourse">
              <div>
                <img src={AddCourse} alt="add course" />
                Add Course
              </div>
            </NavLink>
            <NavLink to="/information" className="dropdown">
              <img src={TutorSvg} alt="TUTOR" />
              <span>
                {this.props.user.firstName} {this.props.user.lastName}
              </span>

              <div className="dropdown-content">
                <NavLink to="/settings" component={StudentSettings}>
                  Settings
                </NavLink>
                <NavLink to="/" onClick={this.logout}>
                  Log Out
                </NavLink>
              </div>
            </NavLink>
          </div>
        </div>
        <Tutor />
        <Footer />
      </div>
    );
  }
}

export default connectTranslations(ConnectToUser(TutorProfile));
