import request from '@/utils/request'

export function get(tableName) {
  return request({
    url: 'bsc/genConfig/' + tableName,
    method: 'get'
  })
}

export function update(data) {
  return request({
    url: 'bsc/genConfig',
    data,
    method: 'put'
  })
}
