import request from '@/utils/request'

export function getSchedules() {
  return request({
    url: '/schedules',
    method: 'get'
  })
}
