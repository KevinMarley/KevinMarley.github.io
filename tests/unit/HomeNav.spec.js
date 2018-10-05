/* eslint-env mocha */

import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { expect } from 'chai'
import { mockAction } from '../helpers'
import ApplicationModule from '@/store/modules/application'
import HomeNav from '@/components/TheHomeNav'

// setup a localVue for a mocked vuex application
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Nav', function () {
  let actions, store

  beforeEach(function () {
    // setup a mocked Vuex Store
    this.toggleNavDrawerAction = mockAction()
    actions = { toggleNavDrawer: this.toggleNavDrawerAction.action.bind(this.toggleNavDrawerAction) }

    store = new Vuex.Store({
      modules: {
        application: {
          namespaced: true,
          state: { isNavDrawerOpen: false },
          actions,
          getters: ApplicationModule.getters
        }
      }
    })

    this.wrapper = shallowMount(HomeNav, { store, localVue })
  })

  // smoke test
  it('renders a root div with class home-navigation', function () {
    expect(this.wrapper.classes())
      .to.be.an('array')
      .that.includes('home-navigation')
      .and.has.lengthOf(1)
  })

  // check clicking the hamburger triggers store action
  it('clicking the hamburger button triggers toggleNavDrawer action', function () {
    expect(this.toggleNavDrawerAction.getCalled()).to.equal(0)
    const btn = this.wrapper.find('.home-navigation__btn')
    btn.trigger('click')
    expect(this.toggleNavDrawerAction.getCalled()).to.equal(1)
  })

  // check reacts to store getter - closed case
  it('the hamburger class is initially closed', function () {
    const hamburger = this.wrapper.find('.home-navigation__hamburger')
    expect(hamburger.classes())
      .to.be.an('array')
      .that.includes('home-navigation__hamburger--closed')
      .and.not.includes('home-navigation__hamburger--open')
  })

  // check reacts to store getter - open case
  it('the hamburger class is open if nav drawer is open', function () {
    // create new store where getter returns true
    store = new Vuex.Store({
      modules: {
        application: {
          namespaced: true,
          state: {},
          actions,
          getters: {
            isNavDrawerOpen: () => true
          }
        }
      }
    })
    const hamburger = shallowMount(HomeNav, { store, localVue }).find('.home-navigation__hamburger')
    expect(hamburger.classes())
      .to.be.an('array')
      .that.includes('home-navigation__hamburger--open')
      .and.not.includes('home-navigation__hamburger--close')
  })
})
