import React, { Component } from "react";
import AOA1 from "../img/AOA1.png";
import Modal from "./Modal";
import "../styles/header.css";
import SignIn from "./SignIn";
import "../styles/Sign.css";
import SignUp from "./SignUp";
import { NavLink, Link } from "react-router-dom";
import { connectTranslations } from "../context/TranslationContext";
import Menu from './Menu'



class Header extends Component {
  state = {
    show: false,
    showReg: false,
    isShown: false
  };

  showModal = () => {
    this.setState({
      show: true
    });
  };

  showReg = () => {
    this.setState({
      showReg: true
    });
  };

  closeAllModals = () => {
    this.setState({
      show: false,
      showReg: false
    });
  };

  openMenu = () =>{
    this.setState({
        isOpen: !this.state.isOpen
    })
}

  render() {
    const { show, showReg } = this.state;
    const { texts } = this.props;
    return (
      <div>
        <div className="head">
        <div className="burger" onClick={this.openMenu}> 
                <div className="hamburger"></div>
                <div className="hamburger"></div>
                <div className="hamburger"></div>
            </div>
          <div className="navBar">
            <div className="img-logo">
              <Link to="/">
                <img src={AOA1} alt="AOA" className="logo" />
              </Link>
            </div>
            <div className="nav-bar">
              <input
                className="search"
                type="search"
                placeholder={texts.header.search}
              />
              <NavLink to="/courses">{texts.header.courses}</NavLink>
              <NavLink to="/contact">{texts.header.contact}</NavLink>
              <a href="javasript:void" onClick={this.showModal}>{texts.header.signIn}</a>
              <a onClick={this.showReg} href="#Courses" className="regBtn">
                {texts.header.register}
              </a>
              <Modal onClose={this.closeAllModals} show={show || showReg}>
                {show ? <SignIn onClose={this.closeAllModals} /> : null}
                {showReg ? <SignUp /> : null}
              </Modal>
            </div>
          </div>
        </div>
        { this.state.isOpen ? <div className="menu-content" >
          <Menu />
        </div> : null}
      </div>
    );
  }
}

export default connectTranslations(Header);
