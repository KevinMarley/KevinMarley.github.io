/* eslint-env mocha */

import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import CardSlider from '@/components/common/CardSlider'

const TESTING_ALT = 'An image'
const TESTING_IMAGE = require('@/assets/IG.png')
const TESTING_TITLE = 'TESTING'

describe('CardSlider', function () {
  beforeEach(function () {
    this.wrapper = shallowMount(CardSlider, {
      propsData: {
        altText: TESTING_ALT,
        image: TESTING_IMAGE,
        title: TESTING_TITLE
      }
    })
  })

  it('renders a root with class card-slider', function () {
    expect(this.wrapper.find('.card.card-slider'))
  })

  it('Renders the provided image', function () {
    const img = this.wrapper.find('img')
    expect(img.attributes().src)
      .to.equal(TESTING_IMAGE)
  })

  it('adds the alt text to the provided image', function () {
    const img = this.wrapper.find('img')
    expect(img.attributes().alt)
      .to.equal(TESTING_ALT)
  })

  it('has a title equal to the provided prop title', function () {
    const title = this.wrapper.find('div.card-content span.card-title')
    expect(title.text()).to.equal(TESTING_TITLE)
  })
})
