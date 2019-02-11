import React, { Component } from "react";
import "../styles/Tutor/tutorCourses.css";
import AllCourse from "../components/AllCourse";
import { ConnectToUser } from "../context/ConnectUser";
import {Link} from 'react-router-dom';
import Pagination from '../components/Pagination';
import { paginate } from "../components/paginate";

class MyCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mycourses: this.props.user.course,
      currentPage: 1,
      pageSize: 6,
    };
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { mycourses,pageSize,currentPage } = this.state;
    console.log(mycourses)
    const myCourseList = mycourses && paginate(Object.keys(mycourses),currentPage, pageSize);
     return myCourseList ? (
      <div className="tut-mycourses">
        {myCourseList.map(course => (
          <Link to={`${this.props.match.url}/${course}`}>
            <AllCourse details={mycourses[course]} key={course} />
          </Link>
        ))}
        <Pagination
              itemsCount={myCourseList.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
      </div>
    ) : (
      <div className="empty-courses">Oops, Courses Aren`t Uploaded Yet.</div>
    );
  }
}

export default ConnectToUser(MyCourses);
