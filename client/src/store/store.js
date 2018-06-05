import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const $http = 'http://localhost:3000/'
// const $http = 'http://35.198.207.92:3000/'

// export const store = new Vuex.Store({
export default new Vuex.Store({
  state: {
    JktWeather: [],
    statusLogin: true,
    statusLogout: false
  },
  mutations: {
    getWeather: function (state, payload) {
      state.JktWeather = payload
    },
    changeStLogin: function (state, payload) {
      state.statusLogin = payload.login
      state.statusLogout = payload.logout   
    },
    changeStLogout: function (state, payload) {
      state.statusLogin = payload.login
      state.statusLogout = payload.logout   
    }
  },
  actions: {
    getWeather ({commit}) {
      let api = 'http://api.openweathermap.org/data/2.5/weather?id=1642907&APPID=8610548d7cbdcbb2a69f6572b4219534'

      axios
       .get(api)
       .then(response => {
         let JktWeather = response
         commit('getWeather', JktWeather)
       })
    },

    changeStLogin ({commit}) {
      let objStatus = {
        login:false,
        logout:true
      }
      commit('changeStLogin', objStatus) 
    },

    changeStLogout ({commit}) {
      let objStatus = {
        login:true,
        logout:false
      }
      commit('changeStLogout', objStatus) 
    },
    
  }
})