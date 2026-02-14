import React, { useEffect, useState } from 'react'
import { listJobs } from '../api'

export default function Jobs() {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    listJobs().then(setJobs).catch(() => {})
  }, [])
  return (
    <div>
      <h3>Jobs</h3>
      <ul>
        {jobs.map(j => (<li key={j._id || j.id}>{j.title || j.role || JSON.stringify(j)}</li>))}
      </ul>
    </div>
  )
}
