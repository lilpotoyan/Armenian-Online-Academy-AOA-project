import React, { Component } from "react";
import Logo from "../img/AOA1.png";
import "../styles/studentProfile.css";
import Book from "../img/open-book.svg";
import studentSvg from "../img/study.svg";
import NoteBook from "../img/notebook.svg";
import Male from "../img/male.svg";
import fire from "../config/Fire";
import { NavLink } from "react-router-dom";
import Footer from "./footer";
import User from "../user/User";
import { ConnectToUser } from "../context/ConnectUser";
import StudentSettings from "./StudentSettings";
import { connectTranslations } from "../context/TranslationContext.js";

class Student extends Component {
  state = {};

  logout = () => {
    fire.auth().signOut();
  };

  render() {
    const {
      courses,
      tutors,
      myCourses,
      logOut,
      settings
    } = this.props.texts.student;
    return (
      <div>
        <div className="std-header">
          <div className="student-logo">
            <img
              src={Logo}
              style={{ width: "75px", height: "50px" }}
              alt="Logo"
            />
          </div>
          <div className="page-nav">
            <NavLink to="/courses">
              <div className="navlink">
                <img src={Book} alt="book" />
                <span>{courses}</span>
              </div>
            </NavLink>
            <NavLink to="/tutors">
              <div className="navlink">
                <img src={Male} alt="book" />
                <span>{tutors}</span>
              </div>
            </NavLink>
            <NavLink to="/mycourses">
              <div className="navlink">
                <img src={NoteBook} alt="book" />
                <span>{myCourses}</span>
              </div>
            </NavLink>
            <NavLink to="/aboutstudent">
              <div className="dropdown">
                <button>
                  <img src={studentSvg} alt="Student" />
                  <span>
                    {this.props.user.firstName} {this.props.user.lastName}
                  </span>
                </button>
                <div className="dropdown-content">
                  <NavLink to="/" onClick={this.logout}>
                    {logOut}
                  </NavLink>
                  <NavLink to="/settings" component={StudentSettings}>
                    {settings}
                  </NavLink>
                </div>
              </div>
            </NavLink>
          </div>
          <div />
        </div>
        <User />
        <Footer />
      </div>
    );
  }
}

export default connectTranslations(ConnectToUser(Student));
