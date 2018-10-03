/**
 * @file Exports Configuration for PostCSS, a tool that analyzes
 * CSS and modifies it for production. PostCSS is applied via webpack
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
  plugins: {
    /**
     * Automatically adds vendor prefixes as per the data
     * at {@link https://caniuse.com|Can I use}
     */
    autoprefixer: {}
  }
}
