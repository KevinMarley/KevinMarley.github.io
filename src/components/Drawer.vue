<!--
File: Drawer.vue

Description: Navigation drawer. Contains a nav and link elements.

Author: Vapurrmaid <vapurrmaid@gmail.com>

Copyright (C) 2018 kevinmarley.ca <vapurrmaid@gmail.com>

This code can be freely viewed and forked as per the GitHub
terms of service. However, it may not be modified or distributed.
The members of {@link https://github.com/KevinMarley} hold the sole rights
for contribution and modification.
-->
<template>
  <nav class="nav">

    <!-- Relative Links -->
    <ul class="nav__list">
      <li
        @click="closeNavDrawer"
        :key="link.text"
        v-for="link in navlinks"
        v-scroll-to="link.anchor"
        class="u-center hoverable nav-link nav__list__item">
        {{ link.text }}
      </li>
    </ul>

    <!-- External Links -->
    <ul class="nav__list nav__list--external">
      <li>
        <a title="Kevin Marley Organization source" href="https://github.com/KevinMarley/KevinMarley.github.io">&copy; 2018 Kevin Marley</a>
      </li>
      <li>
        <a title="Make a campaign donation" href="https://www.paypal.me/kevinmarleyward12">Donate</a>
      </li>
    </ul>

  </nav>
</template>

<script>
import { mapActions } from 'vuex'
/** Navigation Links Within Home View */
const HOME_LINKS = [
  { text: 'Meet Kevin', anchor: '#MeetKevin' },
  { text: 'Ward Priorities', anchor: '#Ward12' },
  { text: 'City Concerns', anchor: '#CityConcerns' },
  { text: 'Election', anchor: '#ElectionInfo' },
  { text: 'Connect', anchor: '#Connect' }
]

/**
 * Exports component representing a Navigation
 */
export default {
  name: 'Drawer',
  methods: mapActions('application', ['closeNavDrawer']),
  data () {
    return {
      navlinks: HOME_LINKS
    }
  }
}
</script>

<style lang="scss">
@import '../sass/abstracts/mixins';
@import '../sass/abstracts/variables';

.nav {
  height: 100%;
  min-width: 320px;
  width: $navigation-drawer-width;

  position: absolute;
  top: calc(#{$hamburger-height} + #{$hamburger-top} + 1rem);
  z-index: $z-index-highest;

  background-color: $color-white;
  line-height: normal !important; /* override materialize */

  // local navigation links
  &__list {
    padding: $navigation-list-padding !important; /* override materialize */

    background-color: $color-grey;

    @include respond(desktop) {
      margin: auto;
      max-width: 80%;
    }

    &__item {
      &:not(:last-child) { margin-bottom: 1.5rem; }

      float: none !important; /* override materialize */

      background: $color-white;
      color: $color-secondary;
      padding: 1.5rem;
    }

    // external navigation links
    &--external li {
      float: left;

      a {
        color: $color-black;
      }
    }
  }
}
</style>
