/* eslint-env mocha */

import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Section from '@/components/common/Section'

describe('Section component', function () {
  beforeEach(function () {
    this.wrapper = shallowMount(Section, {
      slots: {
        default: ['<div class="slot-content" />']
      }
    })
  })

  // smoke test
  it('renders a root section with class section', function () {
    expect(this.wrapper.contains('section.section'))
  })

  // check can accept child nodes
  it('wraps a slot', function () {
    expect(this.wrapper.contains('.section.section-content.slot-content'))
  })
})
