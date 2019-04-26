import request from '@/utils/request'

export function loginByEmail(email, password) {
  const data = {
    email: email,
    password: password
  }

  return request({
    url: '/user/authenticate',
    method: 'post',
    data
  })
}
