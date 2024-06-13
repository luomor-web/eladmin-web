import request from '@/utils/request'

export function get() {
  return request({
    url: 'bsc/qiNiuContent/config',
    method: 'get'
  })
}

export function update(data) {
  return request({
    url: 'bsc/qiNiuContent/config',
    data,
    method: 'put'
  })
}

export function download(id) {
  return request({
    url: 'bsc/qiNiuContent/download/' + id,
    method: 'get'
  })
}

export function sync() {
  return request({
    url: 'bsc/qiNiuContent/synchronize',
    method: 'post'
  })
}

export function del(ids) {
  return request({
    url: 'bsc/qiNiuContent',
    method: 'delete',
    data: ids
  })
}

export default { del, download, sync }
