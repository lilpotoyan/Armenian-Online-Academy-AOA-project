import React, { Component } from "react";
import "../styles/footer.css";
import { connectTranslations } from "../context/TranslationContext";

const logoAOA = require("../img/AOA1.png");
const earth = require("../assets/earth.svg");
const arrowdown = require("../assets/ArrowDown.svg");
const fb_icon = require("../assets/facebook_icon.svg");
const yt_icon = require("../assets/youtube_icon.svg");
const twitter_icon = require("../assets/twitter_icon.svg");
const in_icon = require("../assets/linkedin_icon.svg");

class Footer extends Component {
  render() {
    const {texts} = this.props;
    return (
      <div className="footer">
        <div className="footerGrey">
          <div className="logonlang">
            <div className="logo">
              <img src={logoAOA} className="logoaoa" alt="logo" />
            </div>
            <div className="lang-dropdown">
              <button className="dropbtn">
                <img src={earth} className="earth" alt="earth-icon" />
                <p>{texts.footer.lang}</p>
                <img src={arrowdown} className="arrowdown" alt="arrowdown" />
              </button>
              <div className="lang-dropdown-content">
                <a
                  href="javasript:void"
                  onClick={e => this.props.setLocale("hy-AM")}
                >
                  Հայերեն
                </a>
                <a
                  href="javasricpt:void"
                  onClick={e => this.props.setLocale("en-GB")}
                >
                  English
                </a>
              </div>
            </div>
          </div>
          <div className="list">
            <ul className='footer-ul'>
              <li className='footer-li'
                style={{
                  color: "rgb(100,102,100)",
                  fontSize: "25px",
                  fontWeight: "bold"
                }}
              >
                AOA
              </li>
              <li className='footer-li'>
                <a href="/#">{texts.footer.about}</a>
              </li>
              <li className='footer-li'>
                <a href="javasript:void">{texts.footer.business}</a>
              </li>
              <li className='footer-li'>
                <a href="javasript:void">{texts.footer.affiliates}</a>
              </li>
              <li className='footer-li'>
                <a href="javasript:void">{texts.footer.open}</a>
              </li>
            </ul>
            <ul className='footer-ul'>
              <li className='footer-li'
                style={{
                  color: "rgb(100,102,100)",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
              >
                Legal
              </li>
              <li className='footer-li'>
                <a href="javasript:void">{texts.footer.term} </a>
              </li>
              <li className='footer-li'>
                <a href="javasript:void">{texts.footer.privacy}</a>
              </li>
              <li className='footer-li'>
                <a href="javasript:void">{texts.footer.accesibility}</a>
              </li>
            </ul>
            <ul className='footer-ul'>
              <li className='footer-li'
                style={{
                  color: "rgb(100,102,100)",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
              >
                Connect
              </li>
              <li className='footer-li'>
                <a href="javasript:void">{texts.footer.blog}</a>
              </li>
              <li className='footer-li'>
                <a href="/contact">{texts.footer.contact}</a>
              </li>
              <li className='footer-li'> 
                <a href="javasript:void">{texts.footer.help}</a>
              </li>
              <li className='footer-li'>
                <a href="javasript:void">{texts.footer.media}</a>
              </li>
            </ul>
          </div>
          <div className="icons">
            <a href="javasript:void">
              <img src={fb_icon} alt="icon" />
            </a>
            <a href="javasript:void">
              <img src={yt_icon} alt="icon" />
            </a>
            <a href="javasript:void">
              <img src={twitter_icon} alt="icon" />
            </a>
            <a href="javasript:void">
              <img src={in_icon} alt="in-icon" />
            </a>
          </div>
        </div>
        <div className="footerGreen">Copyright © 2018 AOA, Inc.</div>
      </div>
    );
  }
}

export default connectTranslations(Footer);
