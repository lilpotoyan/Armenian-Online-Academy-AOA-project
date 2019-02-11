import React, { Component } from "react";
import "../styles/studentSettings.css";
import { ConnectToUser } from "../context/ConnectUser";
import fire from "../config/Fire";

class StudentProfile extends Component {
  state = {
    activeGender: false,
    firstName: "",
    lastName: "",
    phone: "",
    specialization: "",
    day: "",
    year: "",
    country: "Armenia",
    city: "Yerevan",
    months: "January",
    about: "",
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  activeGender = active => {
    this.setState(state => ({
      activeGender: active
    }));
  };

  submitChanges = e => {
    e.preventDefault();
    fire
      .database()
      .ref("users/" + this.props.user.id)
      .update({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        specialization: this.state.specialization,
        phone: this.state.phone,
        day: this.state.day,
        country: this.state.country,
        city: this.state.city,
        months: this.state.months,
        year: this.state.year,
        gender: this.state.activeGender ? "Female" : "Male",
        about: this.state.about
      });
  };

  render() {
    console.log(this.props.user);
    const { month, activeGender } = this.state;
    const { firstName, lastName, day, specialization, phone } = this.props.user;
    return (
      <div className="mainProf">
        <form className="main-container">
          <div className="inputStyles">
            <div className="span">
              <span>First Name</span>
              <input
                type="text"
                name="firstName"
                placeholder={firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="span">
              <span>Last Name</span>
              <input
                placeholder={lastName}
                type="text"
                name="lastName"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="inputStyles">
            <div className="span">
              <span>Phone</span>
              <input
                placeholder={phone}
                type="text"
                onChange={this.handleChange}
                name="phone"
              />
            </div>
            <div className="span">
              <span>Specialization</span>
              <input
                placeholder={specialization}
                type="text"
                name="specialization"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="selectGender">
            <div className="selects">
              <div className="span">
                <span>Birthday</span>
                <div className="selects">
                  <input
                    placeholder={day}
                    onChange={this.handleChange}
                    className="day"
                    type="number"
                    name="day"
                    min="1"
                    max="31"
                    defaultValue={1}
                  />
                  <select name="months" onChange={this.handleChange}>
                    {month.map(months => (
                      <option
                        defaultValue={months}
                        placeholder="months"
                        key={months}
                        value={months}
                      >
                        {months}
                      </option>
                    ))}
                  </select>
                  <input
                    name="year"
                    className="year"
                    type="number"
                    min="1910"
                    max="2019"
                    placeholder="year"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="gender">
              <div className="span">
                <span>Gender</span>
              </div>
              <div className="selects">
                <button
                  onClick={e => this.activeGender(false)}
                  style={{ color: activeGender ? "black" : "green" }}
                  className="stud-maleBtn"
                  type="button"
                >
                  Male
                </button>
                <button
                  onClick={e => this.activeGender(true)}
                  style={{ color: activeGender ? "green" : "black" }}
                  type="button"
                >
                  Female
                </button>
              </div>
            </div>
          </div>
          <div className="countryNcity">
            <div className="country">
              <div className="span">
                <span>Country</span>
                <select
                  name="country"
                  onChange={this.handleChange}
                  className="selectCountry"
                >
                  <option value="Armenia">Armenia</option>
                  <option value="Russia">Russia</option>
                  <option value="USA">USA</option>
                </select>
              </div>
            </div>
            <div className="country">
              <div className="span">
                <span>City</span>
                <select
                  onChange={this.handleChange}
                  name="city"
                  className="selectCountry"
                >
                  <option value="Yerevan">Yerevan</option>
                  <option value="Moscow">Moscow</option>
                  <option value="New York">New York</option>
                </select>
              </div>
            </div>
          </div>
          <div className="about-user">
            <span>About Me</span>
            <div>
              <textarea
              placeholder={this.props.user.about}
                className="about-textarea"
                name="about"
                onChange={this.handleChange}
                rows="7"
                style={{ resize: "none" }}
              />
            </div>
          </div>
          <div className="saveBtn">
            <button onClick={this.submitChanges}>Save Changes</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ConnectToUser(StudentProfile);
