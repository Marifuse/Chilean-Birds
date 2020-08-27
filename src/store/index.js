import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseURL = 'https://aves.ninjas.cl/api/birds';

export default new Vuex.Store({
  state: {
    bird: {}
  },
  mutations: {
    GET_BIRD(state, bird) { state.bird = bird },
  },
  actions: {
    getBird({commit}) {
      axios
       .get(`${baseURL}`)
       .then((response) => {
          commit('GET_BIRD', response.data)
       })
    }
  },
  modules: {
  }
})
