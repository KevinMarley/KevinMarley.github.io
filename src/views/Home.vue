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
    <HomeNav />
    <Header />
    <main>
      <Meet />
      <Priorities />
      <Election />
    </main>
  </div>
</template>

<script>
import Election from '@/components/Election'
import Header from '@/components/Header'
import Meet from '@/components/Meet'
import HomeNav from '@/components/TheHomeNav'
import Priorities from '@/components/Priorities'

/**
 * Exports Vue Component representing a 'view' for
 * Home (otherwise considered 'Home Page'
 */
export default {
  name: 'Home',
  components: {
    Election,
    Header,
    Meet,
    HomeNav,
    Priorities
  }
}
</script>
