import React, { Component } from "react";
import { connectTranslations } from "../context/TranslationContext";
import "../styles/content.css";
import SearchBox from './SearchBox';
import {ConnectToUser} from '../context/ConnectUser';
import {database} from '../config/Fire';

class Content extends Component {
  state = {
    query: "",
    searchedList: null,
    changed: false
  }
  handleSearchChange = (text) => {
    this.setState({query: text});
    database.ref("/AllCourses").orderByChild("name").startAt(this.state.query).endAt(this.state.query + "\uf8ff").on("value", snapshot => {
      this.setState({
        searchedList: snapshot.val()
      });
    });
    
  }



  handleClickInDiv = (e) => {
    this.setState({changed: true})
  }
  handleBlurInDiv = (e) => {
    this.setState({changed: false})
  }

  render() {
    const { texts } = this.props;
    const {searchedList,changed} = this.state;
    console.log(texts.title);
    return (
      <div className="mainContent">
        <div className={changed ? "about-changed" : "about"}>
          <div className="header1">
          <div>
          <span>{texts.content.title}</span>
          </div>
          </div>        
          <p>{texts.content.slogan}
          </p>
          <div className={changed ? "searchCnt-changed" : "searchCnt"}  onClick={this.handleClickInDiv} onBlur={this.handleBlurInDiv}>
            <div className="posRel">
              <SearchBox placeholder={texts.content.findbtn} onChange={this.handleSearchChange}/>
              <button className="posAbs">{texts.content.find}</button>
            </div>
          </div>
          <div>
            <div className="std-allcourse-card">
            {searchedList !== null && changed && Object.keys(searchedList).map(searched=>
                <div className="allcourse-card">
                  <img src={searchedList[searched].image} alt="Img" />
                  <p className="courseName">{searchedList[searched].name}</p>
                  <p className="p">Subject: {searchedList[searched].subject}</p>
                  <p className="p">Length: {searchedList[searched].length}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConnectToUser(connectTranslations(Content));
