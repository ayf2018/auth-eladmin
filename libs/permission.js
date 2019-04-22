/**
 * @param {Array} value
 * @returns {Boolean}
 */
export const checkPermission = (value) => {
  if (value && value instanceof Array && value.length > 0) {
    const roles = JSON.parse(sessionStorage.getItem('roles'))

    const permissionRoles = value

    const check = arr => arr.some(item => {
      if (permissionRoles.includes(item.name)) {
        return true
      }
      if (item.children && item.children.length) {
        return check(item.children)
      }
    })

    const hasPermission = check(roles)

    if (!hasPermission) {
      return false
    }
    return true
  } else {
    console.error(`need roles! Like v-permission="['admin','editor']"`)
    return false
  }
}
