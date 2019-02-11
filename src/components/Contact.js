import React, { Component } from 'react';
import '../styles/Contact.css';
import { connectTranslations } from '../context/TranslationContext';


class Contact extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  }
  handleChnage = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { texts } = this.props;
    return (
      <div className="contact-main">
      <div className="contactWithUs">Contact With Us</div>
        <div className="contact">
          <div className="contact-with-us">
            <form action="https://formspree.io/surohak96@gmail.com" method="POST">
              <div className='form-inp'>
                <label htmlFor="text">{texts.header.firstName}</label>
                <input type="text" placeholder="First Name" name="firstName" onChange={this.handleChnage} />
              </div>
              <div className='form-inp'>
                <label htmlFor="text">{texts.header.lastName}</label>
                <input type="text" placeholder="Last Name" name="lastName" onChange={this.handleChnage} />
              </div>
              <div className='form-inp'>
                <label htmlFor="email">{texts.header.email}</label>
                <input type="email" placeholder="email@example.com" name="email" onChange={this.handleChnage} />
              </div>
              <div className='form-inp'>
                <label htmlFor="message">{texts.header.message}</label>
                <textarea name="message" id="" cols="30" rows="10" onChange={this.handleChnage}/>
                <input className="send-button" type='submit' value={texts.header.send}/>
                </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connectTranslations(Contact);
