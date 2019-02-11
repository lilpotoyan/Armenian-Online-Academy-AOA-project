import React, { Component } from "react";
import { database } from "../config/Fire";
import Loading from "../img/loading.svg";
import AllCourse from "./AllCourse";
import "../styles/AllCourses.css";
import goBack from "../img/goBackIcon.svg";
import { Link } from "react-router-dom";
import { paginate } from "./paginate";
import Pagination from "./Pagination";

class AllCourses extends Component {
  state = {
    allCourseList: null,
    currentPage: 1,
    pageSize: 6
  };

  componentDidMount() {
    console.log(this.props.location.search.replace("?", ""));
    console.log(
      database
        .ref("/AllCourses")
        .orderByChild("category")
        .equalTo(this.props.location.search)
    );
    database
      .ref("/AllCourses")
      .orderByChild("category")
      .equalTo(this.props.location.search.replace("?", "").replace("%20", " "))
      .on("value", snapshot => {
        console.log(snapshot.val());
        this.setState({
          allCourseList: snapshot.val()
        });
      });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { allCourseList, currentPage, pageSize } = this.state;
    const allCourses =
      allCourseList !== null &&
      paginate(Object.keys(allCourseList), currentPage, pageSize);
    return (
      <>
        <div className="std-allcourse-card">
          {allCourseList === null ? (
            <img src={Loading} alt="Loading" />
          ) : (
            <>
              <Link to="/courses">
                <div className="goBack">
                  <img src={goBack} alt="goBack" />
                </div>
              </Link>
              {allCourses.map(allCourse => (
                <Link
                  to={`${this.props.match.url}/${allCourse}`}
                  key={allCourse}
                >
                  <AllCourse
                    details={allCourseList[allCourse]}
                    id={allCourse}
                  />
                </Link>
              ))}
            </>
          )}
        </div>
        <Pagination
          itemsCount={
            allCourseList !== null && Object.keys(allCourseList).length
          }
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </>
    );
  }
}

export default AllCourses;
