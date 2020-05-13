import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true
})
