import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myname: 'cll'
  },
  mutations: {
    increment (state,aa) {
      state.myname = aa
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment','asyn')
      }, 1000)
    }
  }
})
