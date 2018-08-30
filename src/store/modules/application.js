/**
 * @file Configures a Vuex Store module called 'application'. This
 * module is intended to be used globally across the entire Vue application.
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

/**
 * State properties for 'application' module
 * @namespace state.application
 * @property {boolean} navDrawerIsOpen - indicates whether or not the Navigation Drawer is currently open or closed.
 */
const state = {
  navDrawerIsOpen: false
}

const getters = {
  /**
   * Retrieves boolean state indicating whether or not the Navigation
   * Drawer is open.
   * @returns {boolean}
   */
  isNavDrawerOpen: state => state.navDrawerIsOpen
}

const actions = {
  /**
   * Call to close the Navigation Drawer
   * @returns {undefined}
   */
  closeNavDrawer ({ commit }) {
    commit('setNavDrawer', false)
  },

  /**
   * Call to open the Navigation Drawer
   * @returns {undefined}
   */
  openNavDrawer ({ commit }) {
    commit('setNavDrawer', true)
  },

  /**
   * Call to toggle the Navigation Drawer
   * @returns {undefined}
   */
  toggleNavDrawer ({ commit, getters }) {
    if (getters.isNavDrawerOpen) commit('setNavDrawer', false)
    else commit('setNavDrawer', true)
  }
}

const mutations = {
  /**
   * Sets boolean state of state.navDrawerIsOpen
   * @param {boolean} val
   */
  setNavDrawer: (state, val) => {
    state.navDrawerIsOpen = val
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
