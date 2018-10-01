/* eslint-env mocha */

import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import Section from '@/components/common/Section'

describe('Section component', function () {
  beforeEach(function () {
    this.wrapper = mount(Section, {
      slots: {
        default: ['<div class="slot-content" />']
      }
    })
  })

  it('renders a root section with class section', function () {
    expect(this.wrapper.contains('section.section'))
  })

  it('wraps a slot', function () {
    expect(this.wrapper.contains('.section.section-content.slot-content'))
  })
})
