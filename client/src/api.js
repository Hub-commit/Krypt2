import axios from 'axios'

const api = axios.create({ baseURL: '/api' })

export async function signup(data) {
  return api.post('/auth/signup', data).then(r => r.data)
}

export async function login(data) {
  return api.post('/auth/login', data).then(r => r.data)
}

export async function getMentee(id) {
  return api.get(`/mentees/${id}`).then(r => r.data)
}

export async function listJobs() {
  return api.get('/jobs').then(r => r.data)
}

export default api
