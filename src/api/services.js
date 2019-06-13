import request from '@/utils/request'

export function getServices() {
  return request({
    url: '/services',
    method: 'get'
  })
}

export function getServiceById(serviceId) {
  return request({
    url: '/services/' + serviceId,
    method: 'get'
  })
}

export function postServices(service) {
  const data = {
    name: service.name,
    price: service.price,
    description: service.description
  }

  return request({
    url: '/services',
    method: 'post',
    data
  })
}

export function putServices(service, serviceId) {
  const data = {
    name: service.name,
    price: service.price,
    description: service.description
  }

  return request({
    url: '/services/' + serviceId,
    method: 'put',
    data
  })
}

export function deleteServices(serviceId) {
  return request({
    url: '/services/' + serviceId,
    method: 'delete'
  })
}
