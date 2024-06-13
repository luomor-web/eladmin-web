import request from '@/utils/request'

export function getDicts() {
  return request({
    url: 'bsc/dict/all',
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: 'bsc/dict',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'bsc/dict/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'bsc/dict',
    method: 'put',
    data
  })
}

export default { add, edit, del }
