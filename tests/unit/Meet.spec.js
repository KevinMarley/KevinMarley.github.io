/* eslint-env mocha */

import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Meet from '@/components/Meet'

describe('Meet', function () {
  beforeEach(function () {
    this.wrapper = shallowMount(Meet)
  })

  it('renders a root div with class about', function () {
    expect(this.wrapper.find('div').classes())
      .to.be.an('array')
      .that.includes('about')
      .and.to.have.lengthOf(1)
  })

  it('renders an article', function () {
    expect(this.wrapper.find('div.about article').exists())
      .to.equal(true)
  })
})
