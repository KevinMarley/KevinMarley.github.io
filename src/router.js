/**
 * @file Configuration for Vue Router
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
 * Dynamically imports a Single File Vue Component from the src/views directory
 * by name.
 * @param {string} view - name of a file, omitting the extension. Case sensitive.
 * @returns {Object} A Vue single file component.
 */
function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default {
  routes: [
    {
      path: '*',
      component: loadView('Landing')
    }
  ]
}
