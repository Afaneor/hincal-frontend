import axios from 'axios'
import Cookie from 'js-cookie'
import Qs from 'qs'

const paramsSerializer = (params: any) => {
  return Qs.stringify(params, { indices: false })
}

const config = {
  baseURL: 'https://api.hincal.pavlin.tech/api',
  timeout: 30000,
  withCredentials: false,
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
      throw error
    }
  )
  return instance
}
export default apiClient()
