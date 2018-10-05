/* eslint-env mocha */

import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Card from '@/components/common/Card.vue'

describe('App', function () {
  beforeEach(function () {
    this.wrapper = shallowMount(Card)
  })

  // smoke test
  it('renders a root div with class card', function () {
    expect(this.wrapper.classes())
      .to.be.an('array')
      .that.includes('card')
      .and.to.have.lengthOf(1)
  })
})
