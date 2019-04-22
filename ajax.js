
import axios from 'axios'

function Ajax (opt) {
  if (opt.Authorization) {
    opt = {
      ...opt,
      headers: {}
    }
    opt.headers.Authorization = opt.Authorization
    delete opt.Authorization
  }
  if (process.env.NODE_ENV !== 'production') {
    opt.url = '/eladmin' + opt.url
  }
  if ((opt.method === 'get' || opt.method === 'GET') && opt.data !== {}) {
    let arr = []
    let _params = ''
    for (var key in opt.data) {
      arr.push({
        key: key,
        value: opt.data[key]
      })
    }
    arr.forEach((t, i) => {
      if (i === 0) {
        _params += '?' + t.key + '=' + t.value
      } else {
        _params += '&' + t.key + '=' + t.value
      }
    })
    let getTimestamp
    if (arr.length === 0 && !/\?/.test(opt.url)) {
      getTimestamp = '?timestamp=' + new Date().getTime()
    } else {
      getTimestamp = '&timestamp=' + new Date().getTime()
    }
    opt.url = opt.url + _params + getTimestamp
  }

  opt.url = process.env.NODE_ENV === 'production' ? ('http://' + location.host + opt.url) : opt.url

  return axios({
    ...opt,
    validateStatus: function (status) {
      return status === 200
    },
    timeout: 10000
  }).then(({data}) => {
    return Promise.resolve(data)
  }).catch(error => {
    console.log(error)
    let errMsg = error.message || error
    return Promise.reject(errMsg)
  })
}

export default Ajax
