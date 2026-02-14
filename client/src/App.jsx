import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Auth from './pages/Auth'
import Mentees from './pages/Mentees'
import Mentors from './pages/Mentors'
import AI from './pages/AI'
import Messaging from './pages/Messaging'
import Jobs from './pages/Jobs'
import Goals from './pages/Goals'
import Admin from './pages/Admin'

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/auth">Auth</Link> | <Link to="/mentees">Mentees</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h2>Welcome to Kryppt (React)</h2>} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/mentees/*" element={<Mentees />} />
        <Route path="/mentors/*" element={<Mentors />} />
        <Route path="/ai/*" element={<AI />} />
        <Route path="/messaging/*" element={<Messaging />} />
        <Route path="/jobs/*" element={<Jobs />} />
        <Route path="/goals/*" element={<Goals />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </div>
  )
}
