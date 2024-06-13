import request from '@/utils/request'

export function resetEmail(data) {
  return request({
    url: 'bsc/code/resetEmail?email=' + data,
    method: 'post'
  })
}

export function updatePass(pass) {
  return request({
    url: 'bsc/users/updatePass/' + pass,
    method: 'get'
  })
}
