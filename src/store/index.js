/**
 * @file Configures Vuex Store.
 *
 * @author Vapurrmaid <vapurrmaid@gmail.com>
 *
 * @license Copyright (C) 2018 kevinmarley.ca <vapurrmaid@gmail.com>
 * This code can be freely viewed and forked as per the GitHub
 * terms of service. However, it may not be modified or distributed.
 * The members of {@link https://github.com/KevinMarley} hold the sole rights
 * for contribution and modification.
 */

import AppModule from './modules/application'

const debug = process.env.NODE_ENV !== 'production'

export default {
  modules: {
    application: AppModule
  },
  strict: debug
}
