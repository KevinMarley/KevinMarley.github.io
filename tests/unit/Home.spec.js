/* eslint-env mocha */

import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import Home from '@/views/Home'

// stubs
import Election from '@/components/Election'
import Header from '@/components/Header'
import Meet from '@/components/Meet'
import HomeNav from '@/components/TheHomeNav'
import Priorities from '@/components/Priorities'

const STUBBED_COMPONENTS = [
  HomeNav,
  Header,
  Meet,
  Priorities,
  Election
]

describe('Home View', function () {
  beforeEach(function () {
    this.wrapper = mount(Home, {
      stubs: {
        Election: true,
        Header: true,
        Meet: true,
        HomeNav: true,
        Priorities: true
      }
    })
  })

  // smoke test for each component
  it('renders each component', function () {
    STUBBED_COMPONENTS.forEach(component => {
      expect(this.wrapper.find(component).exists()).to.equal(true)
    })
  })

  // smoke test for semantic tag <main>
  it('has a <main> tag', function () {
    expect(this.wrapper.find('div > main').exists()).to.equal(true)
  })
})
