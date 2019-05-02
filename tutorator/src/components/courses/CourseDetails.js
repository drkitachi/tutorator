import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const CourseDetails = (props) => {
    const { course, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />

    if(course){
      return(
        <div>
        <div className="container section project-details">
          <div className="card z-depth-0">
              <div className="card-content">
                  <span className="card-title center">{course.title}</span>
                  <p><b>Description: </b>{ course.description }</p>
                  <p><b>Contact Info: </b>{ course.contact }</p>
                  <p><b>Hourly Rate: </b>{ course.rate }</p>
              </div>
              <div className="card-action grey lighten-4 grey-text">
                  <div>Posted by {course.authorFIrstName} {course.authorLastName}</div>
                  <div></div>
              </div>
          </div>
        
        </div>
      </div>
    )
    } else {
      return (
        <div className="container center">
          <p>Loading course...</p>
        </div>
      )
    }
  
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state)
  const numID = ownProps.match.params.id;
  const courses = state.firestore.data.courses;
  const course = courses ? courses[numID] : null;
  return {
    course: course,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'courses'}
  ])
) (CourseDetails)
