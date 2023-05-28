import axios from 'axios'
import Cookie from 'js-cookie'
import Qs from 'qs'

const paramsSerializer = (params: any) => {
  return Qs.stringify(params, { indices: false })
}

const config = {
  baseURL: 'https://hincal.pavlin.tech/api',
  timeout: 30000,
  withCredentials: true,
  paramsSerializer,
}
const apiClient = () => {
  const instance = axios.create({
    ...config,
  })
  instance.interceptors.request.use((request) => {
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
