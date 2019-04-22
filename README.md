# 标题

权限管理系统的 npm 库

### 文件目录简析

    guankong-eladmin
        Ajax
            ajax.js ------------ ajax 的封装
        api
            user.js ------------ user 相关的 api （登录登出、获取菜单）
        config
            index.js ----------- 默认配置
        libs
            util.js  ----------- 工具函数部分（token的get和set, user的get和set）
        index.js  -------------- export api

### Event

事件名 | 功能 | 参数
---    | ---  | ---
login  | 登录 => 存储token 和用户信息 | username、password
logout | 退出登录  | -
getToken | 获取token | --
getUserInfo | 获取用户信息 | -
getMenu | 获取菜单 | -

### 依赖

    js-cookie     操作cookie
    jsoneditor    js-cookie 的依赖

### 使用

    import {
      login,
      logout,
      getUserInfo,
      getMenu,
      getToken,
      getPermissions
    } from './guankong-eladmin/index.js'
    
    login({
      username: 'admin',
      password: '123456'
    })
    getMenu()