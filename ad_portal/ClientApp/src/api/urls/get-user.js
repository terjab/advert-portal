import { api } from '../api-client'
import { API_URL_USERS as url } from '../../constants'

export const getUserById = async (id) => {
  const response = await api(`${url}/${id}`)
  return response
}