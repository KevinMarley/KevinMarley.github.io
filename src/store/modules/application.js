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
   */
  closeNavDrawer ({ commit }) {
    commit('setNavDrawer', false)
  },

  /**
   * Call to open the Navigation Drawer
   */
  openNavDrawer ({ commit }) {
    commit('setNavDrawer', true)
  },

  /**
   * Call to toggle the Navigation Drawer
   */
  toggleNavDrawer ({ commit, getters }) {
    if (getters.isNavDrawerOpen) commit('setNavDrawer', false)
    else commit('setNavDrawer', true)
  }
}

const mutations = {
  /**
   * Sets boolean state state.navDrawerIsOpen
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
