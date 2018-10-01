/* eslint-env mocha */

import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Card from '@/components/common/Card.vue'

describe('App', function () {
  beforeEach(function () {
    this.wrapper = mount(Card)
  })

  it('renders a root div with class card', function () {
    expect(this.wrapper.classes())
      .to.be.an('array')
      .that.includes('card')
      .and.to.have.lengthOf(1)
  })
})
