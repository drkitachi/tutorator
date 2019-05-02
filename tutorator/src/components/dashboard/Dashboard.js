import React, { Component } from 'react';
import CourseList from '../courses/CourseList';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const { courses, auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="dashboard container">
        <div className="row">
            <div className="col s12">
              <CourseList courses={courses} />
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    courses: state.firestore.ordered.courses,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'courses', orderBy: ['createdAt', 'desc'] }
  ])
)(Dashboard)
