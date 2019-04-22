import {
  login,
  logout,
  getMenu,
  getPermissions
} from './api/user.js'

import {
  getToken,
  getUserInfo
} from './libs/util'

import {
  checkPermission
} from './libs/permission'

export {
  login,
  logout,
  getMenu,
  getToken,
  getUserInfo,
  getPermissions,
  checkPermission
}
