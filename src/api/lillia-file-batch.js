import request from '@/utils/request'

export function listCtFileBatch(query) {
  return request({
    url: 'bsc/lillia-file-batch/list',
    method: 'get',
    params: query
  })
}

export function createCtFileBatch(data) {
  return request({
    url: 'bsc/lillia-file-batch/create',
    method: 'post',
    data
  })
}

export function readExcelCtFileBatch(data) {
  return request({
    url: 'bsc/lillia-file-batch/readExcel',
    method: 'post',
    data
  })
}

export function readminCtFileBatch(data) {
  return request({
    url: 'bsc/lillia-file-batch/readmin',
    method: 'get',
    data
  })
}

export function updateCtFileBatch(data) {
  return request({
    url: 'bsc/lillia-file-batch/update',
    method: 'post',
    data
  })
}

export function updateNumCtFileBatch(data) {
  return request({
    url: 'bsc/lillia-file-batch/updateNum',
    method: 'post',
    data
  })
}

export function deleteCtFileBatch(data) {
  return request({
    url: 'bsc/lillia-file-batch/delete',
    method: 'post',
    data
  })
}
