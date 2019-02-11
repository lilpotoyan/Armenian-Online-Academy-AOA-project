import React, { Component } from 'react';
import {database} from "../config/Fire"
import Loading from '../img/loading.svg';
import Tutor from './Tutor';
import '../styles/Tutors.css';
import Pagination from './Pagination';
import {paginate} from './paginate';
import {NavLink} from 'react-router-dom';

class Tutors extends Component {
  state = {
    tutorsList: null,
    currentPage: 1,
    pageSize: 3,
  }
  componentDidMount() {
    database.ref("/Tutors").on("value", (snapshot) => {
      this.setState({
        tutorsList: snapshot.val()
      })
    })
  }
  handlePageChange = page => {
    this.setState({currentPage: page})
  }
  render() {
    const {tutorsList,currentPage,pageSize} = this.state;
    const tutors = tutorsList !== null && paginate(Object.keys(tutorsList),currentPage,pageSize);
    return (
      <div className="std-tutors-card">
        {tutorsList === null ? <div className="spinner"><img src={Loading} alt="Loading"/></div> : tutors.map(tutorList => (
        <NavLink to="/information"  key={tutorList}><Tutor details={tutorsList[tutorList]}/></NavLink> ))}
        <Pagination itemsCount={tutorsList !== null && Object.keys(tutorsList).length} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange}/>
      </div>
    );
  }
}

export default Tutors;