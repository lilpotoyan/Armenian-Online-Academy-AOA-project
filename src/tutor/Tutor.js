import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MyCourses from './TutorCourses';
import StudentSettings from "../components/StudentSettings";
import Addcourse from './AddCourse.jsx'
import AboutCourses from '../user/AboutCourse';
import AboutStudent from '../user/AboutStudent';

class Tutor extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/information' component={AboutStudent} />
          <Route exact path='/mycourses' component={MyCourses} />
          <Route path="/settings" component={StudentSettings} />
          <Route path='/addcourse' component={Addcourse} />
          <Route path='/mycourses/:id' component={AboutCourses}/>
          <Redirect to="/information" />
        </Switch>
      </div>
    );
  }
}

export default Tutor;