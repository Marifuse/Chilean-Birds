import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// const baseURL = 'https://aves.ninjas.cl/api/birds';

export default new Vuex.Store({
  state: {
    birds: [],
    currentBird: {},
		overlay: false,
  },
  mutations: {
    GET_BIRDS(state, birds) { state.birds = birds },
    SET_CURRENT_BIRD(state, bird) { state.currentBird = bird },
		HIDE_OVERLAY(state) { state.overlay = false },
		SHOW_OVERLAY(state) { state.overlay = true },
  },
  actions: {
    getBirds({commit}) {
      commit("SHOW_OVERLAY");
      axios
      .get('https://aves.ninjas.cl/api/birds')
      .then((response) => {
        commit('GET_BIRDS', response.data)
        commit("HIDE_OVERLAY");
      })
    },
    setCurrentBird({ commit }, birdHref) {
			commit("SHOW_OVERLAY");
			axios.get(birdHref).then((response) => {
				commit("SET_CURRENT_BIRD", response.data);
				commit("HIDE_OVERLAY");
			});
		},
  },
  modules: {
  }
})
