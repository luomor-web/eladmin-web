import request from '@/utils/request'

export function listLilliaFileBatch(query) {
  return request({
    url: 'bsc/lillia-file-batch/list',
    method: 'get',
    params: query
  })
}

export function createLilliaFileBatch(data) {
  return request({
    url: 'bsc/lillia-file-batch/create',
    method: 'post',
    data
  })
}

export function readExcelLilliaFileBatch(data) {
  return request({
    url: 'bsc/lillia-file-batch/readExcel',
    method: 'post',
    data
  })
}

export function readminLilliaFileBatch(data) {
  return request({
    url: 'bsc/lillia-file-batch/readmin',
    method: 'get',
    data
  })
}

export function updateLilliaFileBatch(data) {
  return request({
    url: 'bsc/lillia-file-batch/update',
    method: 'post',
    data
  })
}

export function updateNumLilliaFileBatch(data) {
  return request({
    url: 'bsc/lillia-file-batch/updateNum',
    method: 'post',
    data
  })
}

export function deleteLilliaFileBatch(data) {
  return request({
    url: 'bsc/lillia-file-batch/delete',
    method: 'post',
    data
  })
}
