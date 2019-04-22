# auth-eladmin

基于eladmin的权限管理系统的 npm 库

### 目录简析

    auth-eladmin
        api
            user.js ------------ user 相关的 api （登录登出、获取菜单）
        libs
            util.js  ----------- 工具函数部分（token的get和set, user的get和set）
        config.js -------------- 默认配置
        ajax.js ---------------- ajax 的封装
        export.js -------------- export 事件
        index.js  -------------- 导出 module.exports
        package.json ----------- auth-eladmin 包信息
        README.md -------------- auth-eladmin 包的介绍

### 依赖

    js-cookie     操作cookie
    jsoneditor    js-cookie 的依赖

### Event

事件名 | 功能 | 参数
---    | ---  | ---
login  | 登录 => 存储token 和用户信息 | username、password
logout | 退出登录  | -
getToken | 获取token | --
getUserInfo | 获取用户信息 | -
getMenu | 获取菜单 | -
getPermissions | 获取用户权限 | -
checkPermission| 检查用户是否有权限 | Array

**组件中使用 checkPermission**

script：

    import {
      checkPermission
    } from './guankong-eladmin/index.js'

    methods: {
        checkPermission,
    }

html:

    <Button v-if="checkPermission['ADMIN']"  type="primary" @click="checkLog">查看日志</Button>

### 使用

    import {
      login,
      logout,
      getUserInfo,
      getMenu,
      getToken,
      getPermissions,
      checkPermission
    } from './guankong-eladmin/index.js'
    
    login({
      username: 'admin',
      password: '123456'
    })
    getMenu()