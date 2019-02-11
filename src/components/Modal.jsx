import React, { Component } from "react";

class Modal extends Component {
  state = {
    fadeIn: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.show === false && this.props.show === true) {
      requestAnimationFrame(() => this.setState({ fadeIn: true }));
      document.body.style.overflow = "auto";
    }
  }

  onClose = e => {
    this.setState({ fadeIn: false }, () => setTimeout(this.props.onClose, 300));
    document.body.style.overflow = "auto";
  };

  render() {
    return (
      <div
        className={
          this.props.show || this.props.showReg ? "modal-container" : null
        }
        style={{ opacity: this.state.fadeIn ? 1 : 0 }}
        onClick={this.onClose}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Modal;
