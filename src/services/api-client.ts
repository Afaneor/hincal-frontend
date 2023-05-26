import axios from 'axios'
import Cookie from 'js-cookie'
import Qs from 'qs'

const paramsSerializer = (params: any) => {
  return Qs.stringify(params, { indices: false })
}

const config = {
  baseURL: 'http://localhost:8000/api',
  timeout: 30000,
  withCredentials: true,
  paramsSerializer,
}
const apiClient = () => {
  const instance = axios.create({
    ...config,
  })
  instance.interceptors.request.use(async (request) => {
    request.headers['X-CSRFToken'] = Cookie.get('csrftoken')
    return request
  })

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      console.log(`error`, error)
    }
  )
  return instance
}
export default apiClient()
