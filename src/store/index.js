import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// const baseURL = 'https://aves.ninjas.cl/api/birds';

export default new Vuex.Store({
  state: {
    birds: []
  },
  mutations: {
    GET_BIRDS(state, birds) { state.birds = birds },
  },
  actions: {
    getBirds({commit}) {
      axios
      .get('https://aves.ninjas.cl/api/birds')
      .then((response) => {
        commit('GET_BIRDS', response.data)
      })
    }
  },
  modules: {
  }
})
