import request from '@/utils/request'

export function loginByEmail(email, password) {
  const data = {
    email: email,
    password: password
  }

  return request({
    url: 'http://localhost:3000/users/authenticate',
    method: 'post',
    data
  })
}
