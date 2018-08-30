/**
 * @file Configures Vuex Store. Registered for global use by
 * the Vue application.
 * @author Vapurrmaid <vapurrmaid@gmail.com>
 *
 * @license
 *
 * Copyright (C) 2018 kevinmarley.ca <vapurrmaid@gmail.com>
 *
 * This code can be freely viewed and forked as per the GitHub
 * terms of service. However, it may not be modified or distributed.
 * The members of {@link https://github.com/KevinMarley} hold the sole rights
 * for contribution and modification.
 */

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
