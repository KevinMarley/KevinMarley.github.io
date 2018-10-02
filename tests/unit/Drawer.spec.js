/* eslint-env mocha */

import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueScrollTo from 'vue-scrollto'
import { expect } from 'chai'
import { mockAction } from '../helpers'
import Drawer from '@/components/Drawer'

// setup a localVue for a mocked vuex application
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueScrollTo)

describe('Drawer', function () {
  let actions, store

  beforeEach(function () {
    // setup a mocked Vuex Store
    this.closeNavDrawerAction = mockAction()
    actions = { closeNavDrawer: this.closeNavDrawerAction.action.bind(this.closeNavDrawerAction) }

    store = new Vuex.Store({
      modules: {
        application: {
          namespaced: true,
          state: {},
          actions
        }
      }
    })

    this.wrapper = shallowMount(Drawer, { store, localVue })
  })

  it('renders a root nav', function () {
    expect(this.wrapper.classes())
      .to.be.an('array')
      .that.includes('nav')
      .and.to.have.lengthOf(1)
    expect(this.wrapper.contains('nav.nav'))
  })

  it('contains a list of links and list external links', function () {
    expect(this.wrapper.contains('nav.nav ul.nav__list'))
    expect(this.wrapper.contains('nav.nav ul.nav__list--external'))
  })

  it('calls closeNavDrawer on nav li click', function () {
    const listItem = this.wrapper.find('nav.nav ul.nav__list li')
    listItem.trigger('click')
    expect(this.closeNavDrawerAction.getCalled())
      .to.equal(1)
  })
})
