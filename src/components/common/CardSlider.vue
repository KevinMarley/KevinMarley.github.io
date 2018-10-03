<!--
File: CardSlider.vue

Description: Material Card with image and text.

Author: Vapurrmaid <vapurrmaid@gmail.com>

Copyright (C) 2018 kevinmarley.ca <vapurrmaid@gmail.com>

This code can be freely viewed and forked as per the GitHub
terms of service. However, it may not be modified or distributed.
The members of {@link https://github.com/KevinMarley} hold the sole rights
for contribution and modification.
-->
<template>
  <Card class="card-slider">

    <div class="card-image waves-effect waves-block waves-light">
      <img :alt="altText" class="card-slider__img activator" :src="image">
    </div>

    <div class="card-content card-slider__content">
      <span class="u-left-align card-title activator card-slider__title">
        {{ title }}
      </span>
      <a class="u-right activator">
        <i class="material-icons">arrow_upward</i>
      </a>
    </div>

    <div class="card-reveal">
      <a class="card-title">
        <i class="material-icons right">arrow_downward</i>
      </a>
      <slot></slot>
    </div>

  </Card>
</template>

<script>
import Card from '@/components/common/Card'

/**
 * A reusable Card component. Contains a click-able image that reveals text.
 * Child nodes are the inner card (revealed 'under' image).
 *
 * @vue-prop {String} altText - Required. Textual description for the provided image
 * @vue-prop {String} image - Required. Fully qualified path to an image asset.
 * @vue-prop {String} title - Required. Title, appears on card front alongside image.
 */
export default {
  name: 'CardSlider',
  components: { Card },

  props: {
    altText: String,
    image: String,
    title: String
  }
}
</script>

<style lang="scss">
@import '../../sass/abstracts/mixins';
@import '../../sass/abstracts/variables';

.card-slider {

  &__img {
    @include respond(desktop) {
      height: 270px;
    }

    @include respond(xl) {
      height: 300px;
    }
  }

  &__title {
    // boxing
    display: inline-block !important; /* override materialize */
    // styling
    font-size: 2rem !important;
    text-transform: uppercase;
  }
}
</style>
