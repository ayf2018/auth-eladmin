import {
  login,
  logout,
  getPermissions
} from './api/user.js'

import {
  getToken,
  getUserInfo,
  getMenus
} from './libs/util'

import {
  checkPermission
} from './libs/permission'

export {
  login,
  logout,
  getMenus,
  getToken,
  getUserInfo,
  getPermissions,
  checkPermission
}
