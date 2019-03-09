import axios from 'axios'
import store from './store'

export default function setupInterceptors () {
  axios.interceptors.request.use(config => {
    const token = store.getters.getAccessToken
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, error => {
    return Promise.reject(error)
  })

  // Implicitly return response to be passed to next Axios resolver
  axios.interceptors.response.use(response => response, error => {
    if (error.response.status === 403 || error.response.status === 401) {
      location.href = store.getters.getAuthURL
    }
    return Promise.reject(error)
  })
}
