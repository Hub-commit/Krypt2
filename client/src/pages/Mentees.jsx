import React, { useEffect, useState } from 'react'
import { getMentee } from '../api'

export default function Mentees() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    // placeholder id
    getMentee('000000000000000000000000').catch(() => {})
  }, [])

  return (
    <div>
      <h3>Mentees</h3>
      <p>Implement mentee views here.</p>
      {profile && <pre>{JSON.stringify(profile, null, 2)}</pre>}
    </div>
  )
}
