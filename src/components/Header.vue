<!--
File: Header.vue

Description: Main site Header. Wraps <h1>.

Author: Vapurrmaid <vapurrmaid@gmail.com>

Copyright (C) 2018 kevinmarley.ca <vapurrmaid@gmail.com>

This code can be freely viewed and forked as per the GitHub
terms of service. However, it may not be modified or distributed.
The members of {@link https://github.com/KevinMarley} hold the sole rights
for contribution and modification.
-->
<template>
  <header class="header">

    <!-- Header Text -->
    <div class="header__text-box">
      <h1 class="heading-primary">
        <!-- KEVIN -->
        <span class="heading-primary--main">
          K<span class="heading-primary--alt">evin</span>
        </span>
        <!-- Marley -->
        <span class="heading-primary--main">
          M<span class="heading-primary--alt">arley</span>
        </span>
      </h1>
      <!-- City County 2018 -->
      <h2 class="heading-secondary">
        <span class="heading-secondary--spaced">
          City Council 2018
        </span>
        Ward 12
      </h2>
    </div>

  </header>
</template>

<script>
/**
 * Exports component detailing a site header
 */
export default {
  name: 'Header'
}
</script>

<style lang="scss">
@import '../sass/abstracts/variables';

.header {
  // boxing
  min-height: $header-height;
  height: 100vh;
  min-width: 320px;
  // positioning
  position: relative;
  // styling
  background-image: linear-gradient(
    to right bottom,
    rgba($color-primary-dark-2, 0.7),
    rgba($color-secondary-light-1, 0.7)),
    url('../assets/hamilton-skyline.jpg');
  background-size: cover;
  background-position: top;

  &__text-box {
    // boxing
    margin-bottom: 1rem;
    // position
    position: absolute;
    top: 25%;
    left: 10%;
  }
}

.heading-secondary {
  margin-top: .5rem;
  &--spaced { margin-bottom: .5rem; }
}

</style>
