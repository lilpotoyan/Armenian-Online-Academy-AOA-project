import React, { Component } from "react";
import avatar from "../img/avatar.png";
import "../styles/container.css";
import left from "../img/leftarrow.png";
import right from "../img/arrowright.png";
import { connectTranslations } from "../context/TranslationContext";
import {Link} from 'react-router-dom';

class Container extends Component { 
  render() {
    const { texts } = this.props;
    return (
      <div className="container">
        <h2>{texts.container.popularSubs}</h2>
        <div className="imgRow">
          <div className="subOne subjects">
            <Link to="/allcourses">
            <div className="shadow shadow1">
              <h3>{texts.container.computerScience}</h3>
            </div>
            </Link>
          </div>
          <div className="subTwo subjects">
            <Link to="/allcourses">
            <div className="shadow shadow2">
              <h3>{texts.container.language}</h3>
            </div>
            </Link>
          </div>
        </div>

        <div className="imgRow">
          <div className="subThree subjects">
            <Link to="/allcourses">
            <div className="shadow shadow3">
              <h3>{texts.container.engineering}</h3>
            </div>
            </Link>
          </div>

          <div className="subFour subjects">
            <Link to="/allcourses">
            <div className="shadow shadow2">
              <h3>{texts.container.managment}</h3>
            </div>
            </Link>
          </div>
        </div>
        <div className="feedback">
          <h2>{texts.container.feedback}</h2>
          <div className="card card-4">
            <div>
              <img src={avatar} alt="" />
            </div>
            <div className="about-user">
              <h3>Susan Mckartney</h3>
              <span>Student</span>
              <p>
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="arrows">
            <div className="arrow arrow-left">
              <img src={left} alt="Left" />
            </div>
            <div className="arrow arrow-right">
              <img src={right} alt="Left" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connectTranslations(Container);
