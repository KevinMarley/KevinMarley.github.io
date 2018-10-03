/* eslint-env mocha */

import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Priorities from '@/components/Priorities'

describe('Priorities', function () {
  beforeEach(function () {
    this.wrapper = shallowMount(Priorities)
  })

  // smoke test
  it('renders a root div with class ward12', function () {
    expect(this.wrapper.find('div').classes())
      .to.be.an('array')
      .that.includes('ward12')
      .and.has.lengthOf(1)
  })

  // smoke test for <h3>
  it('renders Priorities heading', function () {
    expect(this.wrapper.find('h3').text())
      .to.equal('Priorities')
  })

  // smoke test for nested <h4>
  it('renders a heading for Ward 12 Priorities', function () {
    expect(this.wrapper.find('.ward12__container .row:first-child h4').text())
      .to.equal('Ward 12 Priorities')
  })

  // smoke test for nested <h4>
  it('renders a heading for City Priorities', function () {
    expect(this.wrapper.find('.ward12__container .row:last-child h4').text())
      .to.equal('City-Wide Concerns')
  })
})
