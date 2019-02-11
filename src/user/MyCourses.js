import React, { Component } from "react";
import MyCourse from "./MyCourse";
import "../styles/mycourses.css";
import Loader from "../img/loading.svg";
import { ConnectToUser } from "../context/ConnectUser";
import {NavLink} from 'react-router-dom';
import {paginate} from '../components/paginate';
import Pagination from '../components/Pagination';

class MyCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CourseList: props.user.course || [],
      currentPage: 1,
      pageSize: 6,
    };
  }
 
  handlePageChange = page => {
    this.setState({currentPage: page})
  }
  render() {
    const { CourseList,currentPage,pageSize } = this.state;
    const myCourses = CourseList !== null && paginate(Object.keys(CourseList),currentPage,pageSize);
    return (
      <>
      <div className="std-mycourses">
        {CourseList === null ? (
          <img src={Loader} alt="Loading" />
        ) : (
          <>
          {myCourses.map(course => (
            <NavLink to={`${this.props.match.url}/${course}`} key={course}><MyCourse  id={course} details={CourseList[course]} /></NavLink>
          ))}
          </>
        )}
      </div>
      <Pagination itemsCount={CourseList !== null && Object.keys(CourseList).length} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange}/>
      </>
    );
  }
}

export default ConnectToUser(MyCourses);
