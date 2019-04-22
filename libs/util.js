import Cookies from 'js-cookie'
import config from './../config'
const { cookieExpires } = config

export const token = Cookies.get('token')
export const Authorization = `Bearer ${token}`
export const roles = Cookies.get('roles')

export const setToken = (token) => {
  Cookies.set('token', token, { expires: cookieExpires || 1 })
}

export const getToken = () => {
  const token = Cookies.get('token')
  if (token) return token
  else return false
}

export const removeToken = () => {
  return Cookies.remove('token')
}

export const setUserInfo = (user) => {
  Cookies.set('user', user, { expires: cookieExpires || 1 })
}

export const getUserInfo = () => {
  const user = Cookies.get('user')
  if (user) return JSON.parse(user)
  else return false
}

export const setRoles = (roles) => {
  sessionStorage.setItem('roles', JSON.stringify(roles))
}

export const getRoles = () => {
  const roles = sessionStorage.getItem('roles')
  if (roles) return JSON.parse(roles)
  else return false
}
