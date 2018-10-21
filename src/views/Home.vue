<!--
File: Home.vue

Description: Home View, routed to /#/

Author: Vapurrmaid <vapurrmaid@gmail.com>

Copyright (C) 2018 kevinmarley.ca <vapurrmaid@gmail.com>

This code can be freely viewed and forked as per the GitHub
terms of service. However, it may not be modified or distributed.
The members of {@link https://github.com/KevinMarley} hold the sole rights
for contribution and modification.
-->
<template>
  <div>
    <Header />
      <div class="container video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/boG2gW_FWhs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    <Meet />
    <Priorities />
    <Election />
  </div>
</template>

<script>
import Election from '@/components/Election'
import Header from '@/components/Header'
import Meet from '@/components/Meet'
import Priorities from '@/components/Priorities'

export default {
  name: 'Home',
  components: {
    Election,
    Header,
    Meet,
    Priorities
  }
}
</script>
