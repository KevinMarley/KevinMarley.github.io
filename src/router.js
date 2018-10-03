/**
 * @file Configures a Router for the Vue Application.
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
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
    // {
    //   path: '/media',
    //   name: 'media',
    //   component: () => import(/* webpackChunkName: "media" */ './views/Media.vue')
    // }
  ]
})
