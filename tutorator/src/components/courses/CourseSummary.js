import React from 'react'
import moment from 'moment'

const CourseSummary = ({course}) => {
  return (
    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{course.title}</span>
            <p>Posted by {course.authorFirstName} {course.authorLastName}</p>
            <p className="grey-text">{moment(course.createdAt.toDate()).calendar()}</p>
        </div>
    </div>
  )
}

export default CourseSummary