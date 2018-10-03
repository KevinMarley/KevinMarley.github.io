<!--
File: Election.vue

Description: Cards regarding 2018 election information.

Author: Vapurrmaid <vapurrmaid@gmail.com>

Copyright (C) 2018 kevinmarley.ca <vapurrmaid@gmail.com>

This code can be freely viewed and forked as per the GitHub
terms of service. However, it may not be modified or distributed.
The members of {@link https://github.com/KevinMarley} hold the sole rights
for contribution and modification.
-->
<template>
  <Section>
    <div class="container election">
      <h3 class="heading-tertiary" id="ElectionInfo">
        Election Information
      </h3>

      <!-- ELECTION CARDS -->
      <div class="row">

        <!-- REGISTRATION CARD -->
        <div class="col s12 m6">
          <Card class="hoverable election__card">

            <div class="card-content">
              <span class="card-title election__title">
                Are You Registered To Vote?
              </span>
              <div class="election__card__image-box">
                <img class="election__card__image" src="@/assets/voterlookup.png">
              </div>
            </div>

            <div class="u-center card-action">
              <a class="btn pink lighten-2" href="https://www.voterlookup.ca/home.aspx">
                Check Voter Lookup
              </a>
            </div>
          </Card>
        </div>

        <!-- ELECTION 2018 CARD -->
        <div class="col s12 m6">
          <Card class="hoverable election__card">

            <div class="card-content">
              <span class="card-title election__title">
                Election 2018
              </span>
              <blockquote>
                The next Municipal Election is Monday, October 22, 2018.
                Reminder, you are allowed a 3 hour window to vote.
              </blockquote>
            </div>

            <div class="u-center card-action">
              <a class="btn pink lighten-2" href="https://www.hamilton.ca/municipal-election">
                More
              </a>
            </div>
          </Card>
        </div>

      </div>
    </div>
  </Section>
</template>

<script>
import Card from '@/components/common/Card'
import Section from '@/components/common/Section'

/**
 * Exports a set of cards detailing upcoming election information
 */
export default {
  name: 'Election',
  components: {
    Card,
    Section
  }
}
</script>

<style lang="scss">
.election {

  &__card .card-content {
    padding: 5rem;
    height: 200px;
  }

  &__card__image-box {
    width: 100%;
    text-align: center;
  }

  &__card__image {
    height: 5rem;
  }

  &__title {
    font-size: 2rem !important; /* override materialize */
  }
}
</style>
