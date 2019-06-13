import request from '@/utils/request'

export function loginByEmail(email, password) {
  const data = {
    email: email,
    password: password
  }

  return request({
    url: '/users/authenticate',
    method: 'post',
    data
  })
}
