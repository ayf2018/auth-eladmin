import Ajax from './../ajax'
import {
  Authorization,
  setToken,
  removeToken,
  setUserInfo,
  setRoles
} from './../libs/util'
import config from './../config'
const { urls } = config

export const login = ({ username, password }) => {
  const data = {
    username,
    password
  }
  Ajax({
    url: urls.login,
    data,
    method: 'post'
  }).then(({ token, user }) => {
    setToken(token)
    setUserInfo(user)
    getPermissions().then(({ content }) => {
      setRoles(content)
    })
  })
}

export const logout = (token) => {
  return new Promise((resolve, reject) => {
    setToken('token', '')
    removeToken()
    resolve()
  })
}

export const getMenu = () => {
  return Ajax({
    url: urls.getmenus,
    Authorization,
    method: 'get'
  })
}

export const getPermissions = () => {
  return Ajax({
    url: urls.getpermissions,
    Authorization,
    method: 'get'
  })
}
