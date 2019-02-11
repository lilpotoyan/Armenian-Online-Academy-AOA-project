import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Courses from '../components/Courses';
import MyCourses from './MyCourses';
import Tutors from '../components/Tutors';
import StudentSettings from "../components/StudentSettings"
import AllCourses from '../components/AllCourses';
import AboutCourse from "./AboutCourse"
import AboutStudent from './AboutStudent';

class User extends Component {
  render() {
    return (
        <Switch>
          <Route path='/courses' component={Courses} />
          <Route exact path='/mycourses' component={MyCourses} />
          <Route path="/settings" component={StudentSettings} />
          <Route path='/tutors' component={Tutors} />
          <Route exact path="/allcourses" component = {AllCourses} />
          <Route path="/mycourses/:id" component = {AboutCourse} />
          <Route path="/allcourses/:id" component = {AboutCourse} />
          <Route path="/aboutstudent" component={AboutStudent} />
          <Redirect to="/mycourses" />
        </Switch>
      );
  }
}

export default User;