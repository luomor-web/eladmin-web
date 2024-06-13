import request from '@/utils/request'

export function get() {
  return request({
    url: 'bsc/email',
    method: 'get'
  })
}

export function update(data) {
  return request({
    url: 'bsc/email',
    data,
    method: 'put'
  })
}

export function send(data) {
  return request({
    url: 'bsc/email',
    data,
    method: 'post'
  })
}
