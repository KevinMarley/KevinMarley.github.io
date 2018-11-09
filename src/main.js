/**
 * @file Entry point into the Vue application.
 *
 * @author Vapurrmaid <vapurrmaid@gmail.com>
 *
 * @license Copyright (C) 2018 kevinmarley.ca <vapurrmaid@gmail.com>
 * This code can be freely viewed and forked as per the GitHub
 * terms of service. However, it may not be modified or distributed.
 * The members of {@link https://github.com/KevinMarley} hold the sole rights
 * for contribution and modification.
 */
import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import routerConfig from './router'

Vue.config.productionTip = false

Vue.use(Router)

const router = new Router(routerConfig)

new Vue({
  router,
  render: h => h(App)
}).$mount('#root')
