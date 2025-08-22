import { useEffect, useState } from 'react'
import JobInfo from './JobInfo'
import BtnContainer from './BtnContainer'
const url = 'https://www.course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState(true)
  const [currentItem, setCurrentItem] = useState(0)

  const fetchJobs = async () => {
    try {
      const response = await fetch(url)
      const newJobs = await response.json()
      setJobs(newJobs)
      setIsLoading(false)
    } catch (error) {
      console.error('ERROR: ', error)
    }
  }
  useEffect(() => {
    fetchJobs()
  }, [])

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }
  return (
    <section className="jobs-center">
      {/* button container */}
      {/* button container */}
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  )
}
export default App
