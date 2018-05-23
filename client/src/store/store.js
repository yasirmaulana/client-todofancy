 import Vue from 'vue'
 import Vuex from 'vuex'
 import axios from 'axios'

 Vue.use(Vuex)

// export const store = new Vuex.Store({
export default new Vuex.Store({
  state: {
    JktWeather: []
  },
  mutations: {
    getWeather: function (state, payload) {
      state.JktWeather = payload
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
    }
  }
})