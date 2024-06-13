import request from '@/utils/request'

export function get() {
  return request({
    url: 'bsc/aliPay',
    method: 'get'
  })
}

export function update(data) {
  return request({
    url: 'bsc/aliPay',
    data,
    method: 'put'
  })
}

// 支付
export function toAliPay(url, data) {
  return request({
    url: 'bsc/' + url,
    data,
    method: 'post'
  })
}
