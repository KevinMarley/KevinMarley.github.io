<!--
File: App.vue

Description: Entry Vue Component. Listed components are always
viewable.

Author: Vapurrmaid <vapurrmaid@gmail.com>

Copyright (C) 2018 kevinmarley.ca <vapurrmaid@gmail.com>

This code can be freely viewed and forked as per the GitHub
terms of service. However, it may not be modified or distributed.
The members of {@link https://github.com/KevinMarley} hold the sole rights
for contribution and modification.
-->
<template>
  <div :class="{ 'application-hidden' : isNavDrawerOpen }" id="app">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Footer from '@/components/Footer'

/**
 * Exports root Vue Component. Child components are
 * always-viewable.
 */
export default {
  name: 'App',
  components: { Footer },
  computed: mapGetters('application', ['isNavDrawerOpen'])
}
</script>

<style>
/* Removes scroll/height from application while nav is open */
.application-hidden {
  height: 100vh;
  overflow: hidden;
}
</style>
