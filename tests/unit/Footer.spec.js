/* eslint-env mocha */

import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Footer from '@/components/Footer'

describe('Footer', function () {
  beforeEach(function () {
    this.wrapper = shallowMount(Footer)
  })

  it('renders a root footer with class footer', function () {
    expect(this.wrapper.find('footer.footer'))
  })

  it('renders footer copyright', function () {
    expect(this.wrapper.find('footer.footer div.footer-copyright'))
  })
})
