/* eslint-env mocha */

import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Priorities from '@/components/Priorities'

describe('Priorities', function () {
  beforeEach(function () {
    this.wrapper = shallowMount(Priorities)
  })

  it('renders a root div with class ward12', function () {
    expect(this.wrapper.find('div').classes())
      .to.be.an('array')
      .that.includes('ward12')
      .and.has.lengthOf(1)
  })

  it('renders Prioritie heading', function () {
    expect(this.wrapper.find('h3').text())
      .to.equal('Priorities')
  })

  it('renders a heading for Ward 12 Priorities', function () {
    expect(this.wrapper.find('.ward12__container .row:first-child h4').text())
      .to.equal('Ward 12 Priorities')
  })

  it('renders a heading for City Priorities', function () {
    expect(this.wrapper.find('.ward12__container .row:last-child h4').text())
      .to.equal('City-Wide Concerns')
  })
})
