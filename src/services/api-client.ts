import axios from 'axios'
import Qs from 'qs'

const paramsSerializer = (params: any) => {
  return Qs.stringify(params, { indices: false })
}

const config = {
  baseURL: '/api',
  timeout: 30000,
  withCredentials: true,
  paramsSerializer,
}
const apiClient = axios.create({
  ...config,
})

export default apiClient
