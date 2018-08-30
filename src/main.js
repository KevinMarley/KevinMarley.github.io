/**
 * @file Entry point into the Vue application.
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
import VueScrollTo from 'vue-scrollto'
import '@/sass/main.scss'
import App from './App.vue'
import router from './router'
import store from './store/'

Vue.config.productionTip = false

Vue.use(VueScrollTo)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')
