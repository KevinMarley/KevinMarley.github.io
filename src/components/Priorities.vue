<template>
  <Section>
    <div class="ward12">

      <h3 class="heading-tertiary" id="Ward12">
        Priorities
      </h3>

      <div class="container ward12__container">

        <!-- WARD 12 Priorities -->
        <div class="row">

          <div class="col s12">
            <h4>Ward 12 Priorities</h4>
          </div>

          <!-- INFRASTRUCTURE -->
          <div class="col s12 l4">
            <CardSlider altText="Top down view of well organized roads, situated against a nature backdrop." class="hoverable" :image="require('@/assets/cross-road-above.jpg')" title="Infrastructure">
              <p class="flow-text ward12-card-info">
                <span class="ward12-card-info--huge">C</span>urrent Road Infrastructure is
                not suitable to handle the traffic coming from new developments in
                the area. Members of the community need more efficient ways of getting to the frequented areas
                of Ancaster. More roads going to high volume areas, as well as converting
                traffic lights to traffic circles, can help the growing population get around.
              </p>
            </CardSlider>
          </div>

          <!-- TRAFFIC -->
          <div class="col s12 l4">
            <CardSlider altText="Cars stuck in an urban traffic jam." class="hoverable" :image="require('@/assets/traffic-jam.jpg')" title="Traffic">
              <p class="flow-text ward12-card-info">
                <span class="ward12-card-info--huge">T</span>he situation regarding slow traffic
                on the Mohawk ramp needs to be addressed. Previous discussions explored both
                widening the Lincoln Alexander Parkway as well as possibly the 403. This area
                is a bottleneck for those driving up the mountain and commuters living
                in the area. Thus it is critical that the city develops
                a solution soon in order to alleviate the cluster.
              </p>
            </CardSlider>
          </div>

          <!-- Boundaries -->
          <div class="col s12 l4">
            <CardSlider altText="A map of Hamilton's ward boundaries." class="hoverable" :image="require('@/assets/Ward_Boundaries_2018-1024.png')" title="Boundaries">
              <p class="flow-text ward12-card-info">
                <span class="ward12-card-info--huge">W</span>ith the recent boundary changes
                there is a clear challenge to meet both urban and rural needs. It is clear
                that the priorities for those in Ancaster are different from those in
                surrounding areas. I will push for a boundary change that is in line with the
                provincial boundaries.
              </p>
              <p class="flow-text ward12-card-info">
                <span class="ward12-card-info--huge">I</span>t is critical to address concerns
                both online and in-person through town hall meetings. I will ensure all
                members of the ward have an avenue to voice their concerns and come to a
                consensus on what changes are a priority for the ward.
              </p>
            </CardSlider>
          </div>

        </div> <!-- END W12 ROW -->

        <!-- CITY PRIORITIES -->
        <div class="row">

          <div class="col s12">
            <h4 id="CityConcerns">City-Wide Concerns</h4>
          </div>

          <div class="col s12 m8 offset-m2">
            <article class="article-city-concerns">
              <p class="flow-text ward12-card-info article-city-concerns__p">
                <span class="ward12-card-info--huge">I</span>n addition to Ward 12 priorities,
                I have numerous city-wide concerns.
              </p>

              <p class="flow-text ward12-card-info article-city-concerns__p">
                <span class="article-city-concerns__p--emphasis">Road quality</span> has been an
                issue in Hamilton for a long time. The city needs to do a better job staying on
                top of repairs. I believe the city should utilize modern technology in order to
                digitize reporting mechanisms and provide real-time information regarding
                timelines and repairs.
              </p>

              <p class="flow-text ward12-card-info article-city-concerns__p">
                <span class="article-city-concerns__p--emphasis">Public transit</span> is currently a key
                issue for the city of Hamilton right.
                LRT will be an important step forward for  our city;
                it should bring more foot traffic to the core and relieve
                some of the crowded buses in the inner city. It should allow HSR resources
                to improve connectivity with the outer areas.
                Furthermore, the Hamilton train station needs
                to be utilized to help people get into and out of the city more efficiently.
              </p>
              <p class="flow-text ward12-card-info article-city-concerns__p">
                <span class="article-city-concerns__p--emphasis">Affordable housing</span> needs
                to be viewed as a basic right. Hamilton has done well but
                there is more we can do in order to protect citizens
                from being displaced out of their neighbourhoods.
              </p>

              <p class="flow-text ward12-card-info article-city-concerns__p">
                Other initiatives include working with libraries and education institutions in
                order to provide access to academic journals for the public as well as implementing
                a program for homeless and low income citizens to work for the city.
              </p>
            </article>
          </div>

        </div>

      </div>

    </div>
  </Section>
</template>

<script>
import CardSlider from '@/components/common/CardSlider'
import Section from '@/components/common/Section'

export default {
  name: 'Ward',
  components: {
    CardSlider,
    Section
  }
}
</script>

<style lang="scss">
@import '../sass/abstracts/mixins';
@import '../sass/abstracts/variables';

.ward12__container {
  @include respond(desktop) { width: 90% !important; }
  @include respond(xl) { width: 85% !important; }
}

.ward12-card-info {
  margin-top: 2rem;
  font-size: 1.3rem;

  &--huge {
    font-size: 3rem;
    font-weight: 700;
  }
}

.article-city-concerns {
  background-image: linear-gradient(
    to bottom right,
    // rgba(66, 82, 176, 0.8),
    rgba(173, 177, 198, 0.8),
    // rgba(171, 30, 206, 0.8),
    rgba(215, 170, 226, 0.8)
  ),
  url('../assets/lrt.jpg');
  background-position: center;
  background-size: cover;

  position: relative;

  @media only screen and (min-width: 601px) {
    background-image: unset;
  }

  &__p {
    padding: 1rem;
    font-size: 1.4rem !important;

    &--emphasis {
      color: $color-black;
      font-weight: 700;

      &::before {
        content: "";
        // boxing
        width: 2rem;
        height: 1.4rem;
        display: inline-block;
        margin-right: .5rem;
        // styles
        background-color: $color-black;
        clip-path: polygon(0 0, 0 100%, 100% 100%);
      }
    }
  }
}
</style>
