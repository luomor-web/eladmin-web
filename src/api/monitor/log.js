import request from '@/utils/request'

export function getErrDetail(id) {
  return request({
    url: 'bsc/logs/error/' + id,
    method: 'get'
  })
}

export function delAllError() {
  return request({
    url: 'bsc/logs/del/error',
    method: 'delete'
  })
}

export function delAllInfo() {
  return request({
    url: 'bsc/logs/del/info',
    method: 'delete'
  })
}
