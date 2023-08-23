// Write your code here
import './index.css'

import {Chrono} from 'react-chrono'
import ProjectTimeLineCard from '../ProjectTimelineCard'
import CourseTimeLineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimeLineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimeLineCard key={item.id} courseDetails={item} />
  }

  return (
    <div className="timeline-container">
      <div className="responsive-container">
        <h1 className="sub-heading">
          MY JOURNEY OF <br />
          <span className="main-heading">CCBP 4.0</span>
        </h1>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
