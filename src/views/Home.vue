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
