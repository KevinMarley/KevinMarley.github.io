/* eslint-env mocha */

import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Header from '@/components/Header'

describe('Header', function () {
  beforeEach(function () {
    this.wrapper = shallowMount(Header)
  })

  // smoke test
  it('renders a root header with class header', function () {
    expect(this.wrapper.classes())
      .to.be.an('array')
      .that.includes('header')
      .and.to.have.lengthOf(1)
  })

  // smoke test for <h1>
  it('renders a primary heading h1', function () {
    expect(this.wrapper.find('header h1.heading-primary').exists())
      .to.equal(true)
  })

  // smoke test for <h2>
  it('renders a sub-heading', function () {
    expect(this.wrapper.find('header h2.heading-secondary').exists())
      .to.equal(true)
  })
})
