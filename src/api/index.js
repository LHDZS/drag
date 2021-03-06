import axios from 'axios'
import QS from 'qs'
// import router from '../router/index'

export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params) || {}, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => {
        // if (res.data.status && res.data.status === -99) {
        //   console.log('重新登录')
        //   router.push({path: '/login'})
        //   console.log(res.data.msg)
        // }
        resolve(res.data)
      })
      .catch(err => {
        console.log('接口提示', err.data.msg)
        reject(err.data)
      })
  })
}
