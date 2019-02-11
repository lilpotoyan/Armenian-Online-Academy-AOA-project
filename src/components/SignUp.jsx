import React, { Component } from "react";
import { connectTranslations } from "../context/TranslationContext";
import "../styles/signUp.css";
import fire from "../config/Fire";

class SignUp extends Component {
  state = {
    activeTutor: false,
    email: "",
    password: "",
    confirmpass: "",
    firstName: "",
    lastName: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  validField = {
    validName: false,
    validLastName: false,
    validEmail: false,
    validPassword: false,
    validConfirm: false
  };


  errorFirstName = () => {
    let { firstName } = this.state;
    (firstName.length > 0 && firstName.length < 40) ? this.validField.validName = true : this.validField.validName = false;
    if (firstName.length > 40) {
      return <div className="Error_fields">Invalid name</div>
    }
  };

  errorLastName = () => {

    let { lastName } = this.state;
    (lastName.length > 0 && lastName.length < 40) ? this.validField.validName = true : this.validField.validName = false;
    if (lastName.length > 40) {
      return <div className="Error_fields">Invalid name</div>
    }
  };

  errorEmail = () => {
    let pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    let { email } = this.state;
    email.match(pattern) ? this.validField.validEmail = true : this.validField.validEmail = false;
    return <div
      className="Error_fields">{(email.match(pattern) || email === "") ? " " : "*Invalid e-mail address"}</div>
  };

  errorPassword = () => {
    let pattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*)(?=.*[a-z]).*$/
    let { password } = this.state;
    password.match(pattern) ? this.validField.validPassword = true : this.validField.validPassword = false
    return <div
      className="Error_fields">{(password.match(pattern) || password === "") ? " " : "*Password must be at least 8 characters minimum, letters and numbers / specialChar"}</div>
  };

  errorConfirm = () => {
    let { confirmpass, password } = this.state;
    password === confirmpass ? this.validField.validConfirm = true : this.validField.validConfirm = false;
    return <div
      className="Error_fields">{(password === confirmpass || confirmpass === "") ? " " : "*Must be equal to password"}</div>
  };



  signUp = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        fire
          .database()
          .ref("users/" + user.user.uid)
          .set({
            firstName: this.state.firstName,
            email: this.state.email,
            lastName: this.state.lastName,
            id: user.user.uid,
            type: this.state.activeTutor ? "tutor" : "student"
          });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          err: error.message
        });
      });
  };

  activateTutor = active => {
    this.setState(state => ({
      activeTutor: active
    }));
  };



  render() {
    const { texts } = this.props;
    const { activeTutor, email, password, confirmpass } = this.state;
    return (
      <div className="signUp-main" onClick={e => e.stopPropagation()}>
        <form className="btn-inp">
          <div className="head">
            <h3>{texts.header.register}</h3>
          </div>
          <div className="headBtn">
            <button
              type="button"
              onClick={e => this.activateTutor(false)}
              className="studBtn"
              style={{ color: activeTutor ? "black" : "" }}
            >
              {texts.header.asStudent}
            </button>
            <button
              type="button"
              onClick={e => this.activateTutor(true)}
              style={{ color: activeTutor ? "green" : "" }}
            >
              {texts.header.asTutor}
            </button>
          </div>
          <div className="signUp-inputs">
            <input
              onChange={this.handleChange}
              name="firstName"
              type="text"
              placeholder={texts.header.firstName}
            />
            {this.errorFirstName()}
            <input
              onChange={this.handleChange}
              name="lastName"
              type="text"
              placeholder={texts.header.lastName}
            />
            {this.errorLastName()}
            <input
              type="text"
              onChange={this.handleChange}
              name="email"
              value={email}
              placeholder={texts.header.email}
            />
            {this.errorEmail()}
            <input
              type="password"
              onChange={this.handleChange}
              value={password}
              name="password"
              placeholder={"Password(At least 8 characters)"}
            />
            <div>{this.errorPassword()}</div>
            <input type="password" name="confirmpass" value={confirmpass} onChange={this.handleChange} placeholder={texts.header.confirmPass} />
            {this.errorConfirm()}
            <button type="submit" onClick={this.signUp}>
              {texts.header.register}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connectTranslations(SignUp);
