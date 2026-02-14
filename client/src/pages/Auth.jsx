import React, { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { signup, login } from '../api'

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const navigate = useNavigate()
  const submit = async e => {
    e.preventDefault()
    await signup(form)
    navigate('/')
  }
  return (
    <form onSubmit={submit}>
      <h3>Sign up</h3>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Sign up</button>
    </form>
  )
}

function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const navigate = useNavigate()
  const submit = async e => {
    e.preventDefault()
    await login(form)
    navigate('/')
  }
  return (
    <form onSubmit={submit}>
      <h3>Login</h3>
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
  )
}

export default function Auth() {
  return (
    <div>
      <nav>
        <Link to="signup">Signup</Link> | <Link to="login">Login</Link>
      </nav>
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<h4>Choose an auth action</h4>} />
      </Routes>
    </div>
  )
}
