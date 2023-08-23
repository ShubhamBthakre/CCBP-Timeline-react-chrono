// Write your code here
import './index.css'

import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimeLineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, tagsList, duration} = courseDetails

  return (
    <div>
      <div className="courseTimeLineCard-container">
        <h1 className="heading">{courseTitle}</h1>
        <div className="course-duration-container">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="CourseTagsList">
        {tagsList.map(eachTag => (
          <li className="CourseTagItem">
            <p className="CourseTag">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimeLineCard
