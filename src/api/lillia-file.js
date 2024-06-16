import request from '@/utils/request'

export function listLilliaFile(query) {
  return request({
    url: 'bsc/lillia-file/list',
    method: 'get',
    params: query
  })
}

export function createLilliaFile(data) {
  return request({
    url: 'bsc/lillia-file/create',
    method: 'post',
    data
  })
}

export function addLilliaFileWithBatch(data) {
  return request({
    url: 'bsc/lillia-file/addWithBatch',
    method: 'post',
    data
  })
}

export function deleteLilliaFileWithBatch(data) {
  return request({
    url: 'bsc/lillia-file/deleteWithBatch',
    method: 'post',
    data
  })
}

export function readminLilliaFile(data) {
  return request({
    url: 'bsc/lillia-file/readmin',
    method: 'get',
    data
  })
}

export function updateLilliaFile(data) {
  return request({
    url: 'bsc/lillia-file/update',
    method: 'post',
    data
  })
}

export function deleteLilliaFile(data) {
  return request({
    url: 'bsc/lillia-file/delete',
    method: 'post',
    data
  })
}
