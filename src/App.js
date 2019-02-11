import React, { Component } from "react";
import Header from "./components/header";
import "./App.css";
import Loading from "./img/loading.svg";
import Content from "./components/content";
import Container from "./components/container";
import Footer from "./components/footer";
import { Route, Redirect, Switch } from "react-router-dom";
import { connectTranslations } from "./context/TranslationContext";
import StudentProfile from "./components/Student";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import { ConnectToUser } from "./context/ConnectUser";
import Courses from "./components/Courses";
import AllCourses from "./components/AllCourses";
import TutorProfile from "./components/TutorProfile";

class App extends Component {
  render() {
    return this.props.userIsLoaded && this.props.initialTextLoaded ? (
      <>
        <div>
          {this.props.user ? (
            this.props.user.type === "tutor" ? (
              <TutorProfile />
            ) : (<StudentProfile />)
          ) : (
              <>
                <Header />
                <Switch>
                  <Route
                    path="/"
                    exact
                    render={props => (
                      <>
                        <Content />
                        <Container />
                      </>
                    )}
                  />
                  <Route path="/contact" component={Contact} />
                  <Route path="/signUp" component={SignUp} />
                  <Route path="/courses" component={Courses} />
                  <Route path="/allcourses" component={AllCourses} />
                  <Redirect to="/" />
                </Switch>
                <Footer />
              </>
            )}
        </div>
        {this.props.textLoaded ? null : (
          <div className="loading">
            <img src={Loading} alt="Loading" />
          </div>
        )}
      </>
    ) : (
        <div className="loading">
          <img src={Loading} alt="Loading" />
        </div>
      );
  }
}

export default connectTranslations(ConnectToUser(App));