import React, { Component } from "react";
import '../styles/header.css'
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showReg: false
        }
    }

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
    
    render() {
        const { show, showReg } = this.state;
        return (
            <div className="menu-dropdown">
                <div className="menu-dropdown-content">
                    <NavLink to="/Courses" className="menu-dropdown-content" style={{color: "#457938"}}>Courses</NavLink>
                    <div className="menu-dropdown-content" onClick={this.showModal}>
                        SignIn
                    </div>
                    <div className="menu-dropdown-content" onClick={this.showReg}>
                        SignUp
                    </div>
                    <Modal onClose={this.closeAllModals} show={show || showReg}>
                        {show ? <SignIn onClick={this.closeAllModals}/> : null}
                        {showReg ? <SignUp /> : null}
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Menu;