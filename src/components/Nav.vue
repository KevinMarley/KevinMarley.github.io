<!--
File: Nav.vue

Description: Navigation Menu. Hamburger menu open/closes
a navigation drawer.

Author: Vapurrmaid <vapurrmaid@gmail.com>

Copyright (C) 2018 kevinmarley.ca <vapurrmaid@gmail.com>

This code can be freely viewed and forked as per the GitHub
terms of service. However, it may not be modified or distributed.
The members of {@link https://github.com/KevinMarley} hold the sole rights
for contribution and modification.
-->
<template>
  <div class="navigation">

    <!-- Hamburger Menu -->
    <div
      @click="toggleNavDrawer"
      class="navigation__btn">
      <span
        :class="{ 'navigation__hamburger--open' : isNavDrawerOpen, 'navigation__hamburger--closed' : !isNavDrawerOpen }"
        class="u-center navigation__hamburger">
        &nbsp;
      </span>
    </div>

    <!-- Drawer -->
    <transition name="slideRight">
      <Drawer v-if="isNavDrawerOpen" />
    </transition>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Drawer from '@/components/Drawer'

/**
 * Exports a navigation menu button that toggles a drawer
 *
 * @vue-computed {boolean} isNavDrawerOpen
 * @property {function} toggleNavDrawer
 */
export default {
  name: 'Nav',
  components: { Drawer },
  computed: mapGetters('application', ['isNavDrawerOpen']),
  methods: mapActions('application', ['toggleNavDrawer'])
}
</script>

<style lang="scss">
@import '../sass/abstracts/variables';

.navigation {
  &__btn {
    // sizing
    width: $hamburger-height;
    height: $hamburger-height;

    // positioning - top left corner
    position: absolute;
    top: $hamburger-top;
    left: $hamburger-left;
    z-index: $z-index-highest;

    // styles
    cursor: pointer;
  }

  &__hamburger {
    // boxing
    margin-top: calc(#{$hamburger-height} * 0.5);

    // set relative in order to move pseudo elems
    position: relative;

    // style of each layer of hamburger
    &,
    &::before,
    &::after {
      // sizing and boxing
      width: $hamburger-height;
      height: 2px;
      display: block;
      // style
      background-color: $color-white;
    }

    // styling for just top and bottom layer
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
    }

    // position top and bottom relative to middle layer
    &::before {top: calc(#{$hamburger-height} * -0.4)}
    &::after {top: calc(#{$hamburger-height} * 0.4)}

    &--open {
      &::before { animation: topToArrow 0.5s forwards ease-in-out; }
      &::after { animation: botToArrow 0.5s forwards ease-in-out; }
    }

    &--closed {
      &::before { animation: arrowToTop 0.5s forwards ease-in-out; }
      &::after { animation: arrowToBot 0.5s forwards ease-in-out; }
    }
  }
}
</style>
