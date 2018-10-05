/**
 * @file Contains mocks and helpers strictly for
 * use during unit tests.
 *
 * @author Vapurrmaid <vapurrmaid@gmail.com>
 *
 * @license Copyright (C) 2018 kevinmarley.ca <vapurrmaid@gmail.com>
 * This code can be freely viewed and forked as per the GitHub
 * terms of service. However, it may not be modified or distributed.
 * The members of {@link https://github.com/KevinMarley} hold the sole rights
 * for contribution and modification.
 */

/**
 * @module testhelpers
 */

/**
 * Factory for Vuex actions
 *
 * @example
 *
 * Basic usage:
 * ```javascript
 * this.mockedAction = mockAction()
 * const actions = { action: this.mockedAction.action.bind(this.mockedAction) }
 * this.mockedAction.getCalled()
 * ```
 *
 * @returns {mockAction}
 */
const mockAction = () => {
  /**
   * Mocked Vuex Action
   *
   * @typedef mockAction
   * @type {Object}
   * @property {number} called
   * @property {function} getCalled
   * @property {function} action
   */
  return {
    called: 0,
    getCalled () {
      return this.called
    },
    action () {
      this.called++
    }
  }
}

module.exports = {
  mockAction
}
