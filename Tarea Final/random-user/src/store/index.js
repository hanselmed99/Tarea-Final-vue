import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: Object
  },
  mutations: {
    SET_USUARIO(state, usuario) {
      state.usuario = usuario
    }
  },
  actions: {
    getUsuario({commit}) {
      axios.get('https://randomuser.me/api')
      .then(response => {
        console.log(response);
        commit('SET_USUARIO', response.data);
      })
    }
  },
  getters: {
    usuarioRandom: state => {
      return state.usuario.results
    }
  }
})
