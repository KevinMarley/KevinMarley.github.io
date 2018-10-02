<template>
  <Section>
    <div class="about">
      <h3 class="heading-tertiary" id="MeetKevin">Meet Kevin</h3>

      <!-- ARTICLE + PICTURE ROW -->
      <div class="row">

        <!-- PICTURE COLUMN -->
        <div class="col s12 l6">
          <img
            alt="Kevin standing in front of the Ancaster Village sign"
            class="responsive-img about__img"
            srcset="@/assets/anc-landscape-3-400x270.png 400w,
                    @/assets/anc-landscape-3-600x405.png 600w"
            src="@/assets/anc-landscape-3-600x405.png">
        </div>

        <!-- ARTICLE COLUMN -->
        <div class="col s12 l6">
          <article class="article-content about__content">
            <p class="flow-text about__paragraph">
              Kevin became a resident of Hamilton's Ward 12 at the age of 8 where he
              attended Rousseau Elementary, Ancaster Senior Public and Ancaster High School.
            </p>
            <p class="flow-text about__paragraph">
              Kevin remained in Hamilton for post-secondary education completing a B.A.
              in Philosophy at McMaster University in 2013 whereby he was trained to think
              critically and logically.
            </p>
            <p class="flow-text about__paragraph">
              After graduation, Kevin took his education abroad by going on to obtain an M.A.
              in Cultural Studies with an emphasis on astronomy from the University of Wales.
            </p>
            <p class="flow-text about__paragraph">
              Currently, Kevin is a sales representative at Keller Williams Complete Realty.
              In his spare time Kevin enjoys playing music and gardening.
            </p>
          </article>
        </div>

      </div>

    </div>
  </Section>
</template>

<script>
import Section from '@/components/common/Section'

export default {
  name: 'About',
  components: { Section }
}
</script>

<style lang="scss">
@import '../sass/abstracts/mixins';
@import '../sass/abstracts/variables';

$image-breakpoint-xl: 1203px;

.about {
  &__img {
    width: 100%;

    @include respond(desktop) {
      border-radius: 2rem;
      margin-top: 5rem;
    }

    @media only screen and (min-width: $image-breakpoint-xl) {
      margin-top: unset;
    }
  }

  &__paragraph {
    font-size: 1.5rem;
    line-height: 3rem;
    &:not(:last-child) { margin-bottom: 3rem; }
  }
}

.article-content {
  @include centerblock;
  // boxing, sizing
  width: 95%;
  padding: 1rem;
  // // styling
  background-color: $color-grey;

  @include respond(desktop) {
    min-height: 405px;
    padding: 3rem;
  }
}
</style>
