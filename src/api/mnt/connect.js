import request from '@/utils/request'

export function testDbConnect(data) {
  return request({
    url: 'bsc/database/testConnect',
    method: 'post',
    data
  })
}

export function testServerConnect(data) {
  return request({
    url: 'bsc/serverDeploy/testConnect',
    method: 'post',
    data
  })
}
