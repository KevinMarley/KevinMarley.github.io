/* eslint-env mocha */

import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Footer from '@/components/Footer'

describe('Footer', function () {
  beforeEach(function () {
    this.wrapper = shallowMount(Footer)
  })

  // smoke test
  it('renders a root footer with class footer', function () {
    expect(this.wrapper.find('footer').exists()).to.equal(true)
    expect(this.wrapper.classes())
      .to.be.an('array')
      .that.includes('footer')
      .and.to.have.lengthOf(2)
  })

  // smoke test for copyright
  it('renders footer copyright', function () {
    expect(this.wrapper.find('footer .footer-copyright').exists()).to.equal(true)
  })
})
