import { useEffect, useState } from "react"
import JobList from "../components/JobList"

function Jobs() {
  const [products, setJobs] = useState([])

  useEffect(() => {
    document.title = 'Jobs'
  }, [])

  useEffect(() => {
    fetch('https://www.arbeitnow.com/api/job-board-api')
      .then(res => res.json())
      .then(data => {
      setJobs(data.data)
        
      })
  }, [setJobs])

  return (
    <>

    <div className="container-fluid col-6">
    <img src="https://tse3.mm.bing.net/th?id=OIP.rh7ZPsZ29T8O49PECpA0wwHaCP&pid=Api&P=0&h=180" alt="Job"style={{width:"100%"}} />
    </div>
      <div className="d-flex flex-wrap">
        {
          products.map(
            job => <JobList
              key={job.id}
              id={job.id}
              company={job.company_name}
              title={job.title}
              description={job.description}
              location={job.location}
              tags={job.tags}
              jobType={job.job_types}
              
            />  
          )
        }
      </div>
    </>
    
  )
}

export default Jobs
