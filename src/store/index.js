import Vue from 'vue'
import Vuex from 'vuex'

import AppModule from './modules/application'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    application: AppModule
  },
  strict: debug
})
