import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'bsc/serverDeploy',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'bsc/serverDeploy',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'bsc/serverDeploy',
    method: 'put',
    data
  })
}

export default { add, edit, del }
