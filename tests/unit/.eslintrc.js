/**
 * @file Exports Configuration for ESLint. Used in unit tests only.
 *
 * @author Vapurrmaid <vapurrmaid@gmail.com>
 *
 * @license Copyright (C) 2018 kevinmarley.ca <vapurrmaid@gmail.com>
 * This code can be freely viewed and forked as per the GitHub
 * terms of service. However, it may not be modified or distributed.
 * The members of {@link https://github.com/KevinMarley} hold the sole rights
 * for contribution and modification.
 */
module.exports = {
  /** Mocha test environment allows use of `describe`, `it` etc. */
  env: {
    mocha: true
  },
  rules: {
    'import/no-extraneous-dependencies': 'off'
  }
}
