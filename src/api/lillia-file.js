import request from '@/utils/request'

export function listCtFile(query) {
  return request({
    url: 'bsc/lillia-file/list',
    method: 'get',
    params: query
  })
}

export function createCtFile(data) {
  return request({
    url: 'bsc/lillia-file/create',
    method: 'post',
    data
  })
}

export function addCtFileWithBatch(data) {
  return request({
    url: 'bsc/lillia-file/addWithBatch',
    method: 'post',
    data
  })
}

export function deleteCtFileWithBatch(data) {
  return request({
    url: 'bsc/lillia-file/deleteWithBatch',
    method: 'post',
    data
  })
}

export function readminCtFile(data) {
  return request({
    url: 'bsc/lillia-file/readmin',
    method: 'get',
    data
  })
}

export function updateCtFile(data) {
  return request({
    url: 'bsc/lillia-file/update',
    method: 'post',
    data
  })
}

export function deleteCtFile(data) {
  return request({
    url: 'bsc/lillia-file/delete',
    method: 'post',
    data
  })
}
