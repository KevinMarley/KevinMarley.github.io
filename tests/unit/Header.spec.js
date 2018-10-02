/* eslint-env mocha */

import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Header from '@/components/Header'

describe('Header', function () {
  beforeEach(function () {
    this.wrapper = shallowMount(Header)
  })

  it('renders a root header with class header', function () {
    expect(this.wrapper.find('header.header'))
  })

  it('renders a primary heading h1', function () {
    expect(this.wrapper.find('header h1.heading-primary'))
  })

  it('renders a sub-heading', function () {
    expect(this.wrapper.find('header h2.heading-secondary'))
  })
})
