import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'bsc/localStorage',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'bsc/localStorage/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'bsc/localStorage',
    method: 'put',
    data
  })
}

export default { add, edit, del }
