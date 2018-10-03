/* eslint-env mocha */

import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Election from '@/components/Election.vue'

describe('Election', function () {
  beforeEach(function () {
    this.wrapper = shallowMount(Election)
  })

  // smoke test
  it('renders a root div with class election', function () {
    expect(this.wrapper.find('div').classes())
      .to.be.an('array')
      .that.includes('election')
      .and.have.lengthOf(2)
  })
})
