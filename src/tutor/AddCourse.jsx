import React, { Component } from "react";
import "../styles/addCourse.css";
import { ConnectToUser } from "../context/ConnectUser";
import fire from "../config/Fire";

class AddCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      intro: "",
      level: "beginner",

      price: "",
      currency: "AMD",
      effort: "",
      length: "",
      language: "Armenian",
      category: "Computer Science",
      aboutthiscourse: "",
      tutor: this.props.user.firstName + " " + this.props.user.lastName
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  idGenerator = () => {
    let d = new Date();
    let y = d.getTime();
    return y;
  };

  addCourse = e => {
    e.preventDefault();
    fire
      .database()
      .ref("users/")
      .child(this.props.user.id + "/course/" + this.state.name)
      .set({
        id: this.state.name,
        name: this.state.name,
        intro: this.state.intro,
        subject: this.state.category,
        price: this.state.price + " " + this.state.currency,
        effort: this.state.effort,
        level: this.state.level,
        length: this.state.length,
        language: this.state.language,
        category: this.state.category,
        aboutthiscourse: this.state.aboutthiscourse,
        tutor: this.state.tutor,
        image: "/courseImg/online_courses.jpg"
      });
    fire
      .database()
      .ref("AllCourses/" + this.state.name)
      .set({
        id: this.state.name,
        name: this.state.name,
        intro: this.state.intro,
        level: this.state.level,

        category: this.state.category,
        subject: this.state.category,
        price: this.state.price + " " + this.state.currency,
        effort: this.state.effort,
        length: this.state.length,
        language: this.state.language,
        aboutthiscourse: this.state.aboutthiscourse,
        tutor: this.state.tutor,
        image: "/courseImg/online_courses.jpg"
      });
  };

  render() {
    console.log(this.props.user);
    console.log();
    return (
      <form>
        <div className="add-course-body">
          <div className="add-course-container">
            <div className="add-course-title">
              <span>Title</span>
              <textarea
                name="name"
                onChange={this.handleChange}
                placeholder="COURSE TITLE"
                rows="3"
                style={{ resize: "none" }}
              />
            </div>
            <div
              style={{ marginTop: "40px" }}
              className="add-course-description"
            >
              <span>Short Info</span>
              <textarea
                name="intro"
                onChange={this.handleChange}
                placeholder="COURSE SHORT INFO"
                rows="2"
                style={{ resize: "none" }}
              />
            </div>
            <div className="add-course-group">
              <div />
              <span>Subject</span>
              <select name="category" onChange={this.handleChange}>
                <option value="Computer Science">Computer Science</option>
                <option value="Engineering"> Engineering</option>
                <option value="Language">Language</option>
                <option value="Management">Management</option>
                <option value="Math">Math</option>
                <option value="Physics"> Physics</option>
              </select>
            </div>

            <div className="add-course-description">
              <span>Description</span>
              <textarea
                onChange={this.handleChange}
                name="aboutthiscourse"
                rows="4"
                placeholder="COURSE DESCRIPTION"
              />
            </div>

            <div className="add-course-etc">
              <div className="add-course-language">
                <span>Language</span>
                <select onChange={this.handleChange} name="language">
                  <option value="Armenian">Armenian</option>
                  <option value="English">English</option>
                  <option value="Russian">Russian</option>
                </select>
              </div>

              <div className="add-course-price">
                <span>Price</span>
                <input
                  placeholder="0"
                  name="price"
                  onChange={this.handleChange}
                />
                <select onChange={this.handleChange}>
                  <option value="AMD">AMD</option>
                  <option value="USD">USD</option>
                  <option value="RUB">RUB</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>

              <div className="add-course-level">
                <span>Level</span>
                <select onChange={this.handleChange}>
                  <option value="beginner">beginner</option>
                  <option value="intermediate">intermediate</option>
                  <option value="advanced">advanced</option>
                </select>
              </div>
            </div>

            <div className="add-course-schedule">
              <span>Schedule Details</span>
            </div>

            <div className="add-course-length">
              <span>Course Length</span>
              <input
                onChange={this.handleChange}
                name="length"
                placeholder="COURSE LENGTH"
              />
            </div>
            <div className="add-course-effort">
              <span>Course effort</span>
              <input
                onChange={this.handleChange}
                name="effort"
                placeholder="COURSE EFFORT"
              />
            </div>

            <button onClick={this.addCourse} className="add-button">
              ADD
            </button>
            <div />
          </div>
        </div>
      </form>
    );
  }
}

export default ConnectToUser(AddCourse);
