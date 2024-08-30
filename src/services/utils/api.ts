import axios, { AxiosError } from 'axios'
import { APIError } from '../../errors/APIError'

export const api = axios.create({
  baseURL: 'http://localhost:3000',
})

api.interceptors.response.use(
  function (response) {
    return response
  },
  function (err) {
    if (err instanceof AxiosError) {
      if (err.response?.status === 400) {
        const error = err.response.data.error as string

        throw new APIError(error)
      }

      if (err.code === 'ERR_NETWORK') {
        throw new APIError("Can't connect to the server, try again later")
      }

      if (err.response?.status === 500) {
        throw new APIError('Internal server problems, try again later')
      }
    }
  },
)
