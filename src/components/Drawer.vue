<!--
NAVIGATION SIDE DRAWER

OPTIMIZED FOR MOBILE
 -->
<template>
  <nav class="nav">
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

/** Navigation Component */
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

      float: unset !important; /* override materialize */

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
