import {
  getServices
} from '@/api/services'

const services = {
  state: {
    services: []
  },

  mutations: {
    SET_SERVICES: (state, services) => {
      state.services = services
    }
  },

  actions: {
    getServices({ commit }) {
      return new Promise((resolve, reject) => {
        getOrders().then(response => {
          commit('SET_SERVICES', response.data)
        })

        resolve()
      }).catch(error => {
        reject(error)
      })
    }
  }
}

export default services
