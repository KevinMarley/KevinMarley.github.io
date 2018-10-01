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

export default {
  name: 'CardSlider',
  components: { Card },

  props: {
    altText: String,
    imageName: String,
    title: String
  },

  data () {
    return {
      image: require(`@/assets/${this.imageName}`)
    }
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
