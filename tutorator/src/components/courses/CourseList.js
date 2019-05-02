import React from 'react'
import CourseSummary from './CourseSummary';
import { Link } from 'react-router-dom'

const CourseList = ({courses}) => {
  return (
    <div className="project-list section">
       { courses && courses.map(course => {
         return(
           <Link to={'/courses/' + course.id} key={course.id}>
            <CourseSummary course={course} />
           </Link>
         )
       })} 
    </div>
  )
}

export default CourseList