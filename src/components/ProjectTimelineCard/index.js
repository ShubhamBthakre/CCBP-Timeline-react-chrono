// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const projectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails
  return (
    <div className="project-card-container">
      <img src={imageUrl} className="project-img" alt="project" />
      <div className="project-title-and-duration-container">
        <h1 className="project-heading">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="visit-link">
        Visit
      </a>
    </div>
  )
}
export default projectTimelineCard
