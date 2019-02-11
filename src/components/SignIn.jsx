import React, { Component } from "react";
import { connectTranslations } from "../context/TranslationContext";
import fire from "../config/Fire";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: "",
      password: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  validate = () => {
    let {emailError} = this.state;
    if (!this.state.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
      emailError = "Insert correct email";
    }

    if (emailError) {
      this.setState({emailError});
      return false;
    }
    return true;
  };

  login = e => {
    e.preventDefault();
    const isValid = this.validate();
    if(isValid){
      fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
    }
    else{
      console.log(this.state)
    }
  };

  render() {
    const { texts } = this.props;
    const { email, password } = this.state;
    return (
      <div className="sign" onClick={e => e.stopPropagation()}>
        <form>
          <h1>{texts.header.signIn}</h1>
          <div className="inputs">
            <input
              onChange={this.handleChange}
              type="email"
              value={email}
              placeholder={texts.header.email}
              name="email"
            />
            <div>{this.state.emailError}</div>
            <input
              type="password"
              value={password}
              onChange={this.handleChange}
              placeholder={texts.header.password}
              name="password"
            />
            <input
              type="submit"
              onClick={this.login}
              value={texts.header.signIn}
              className="submit"
            />
          </div>
          <div className="forgot-pass">
            <a href="javasript:void">{texts.header.forgotPass}</a>
            <a href="javasript:void">{texts.header.registerHere}</a>
          </div>
        </form>
      </div>
    );
  }
}

export default connectTranslations(SignIn);
