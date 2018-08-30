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
        class="u-center hoverable nav-link nav__list__item nav__list__link">
        {{ link.text }}
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
  // boxing
  height: 100%;
  min-width: 320px;
  width: $navigation-drawer-width;
  // positioning - top layer/cover BELOW header
  position: absolute;
  top: calc(#{$hamburger-height} + #{$hamburger-top} + 1rem);
  z-index: $z-index-highest;
  // styling
  background-color: $color-white;
  line-height: normal !important; /* override materialize */

  &__list {
    // boxing
    height: 80%;
    padding: $navigation-list-padding !important; /* override materialize */
    // styling
    background-color: $color-grey;
    @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
      // add diagnoal bg-color if supported
      clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    }

    @include respond(desktop) {
      margin: auto;
      max-width: 80%;
    }

    &__item {
      // boxing
      &:not(:last-child) { margin-bottom: 1.5rem; }
      // positioning
      float: unset !important; /* override materialize */
      // styling
      background: $color-white;
      padding: 1.5rem;
    }

    &__link {
      color: $color-secondary;
    }
  }
}
</style>
