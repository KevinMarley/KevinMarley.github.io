<template>
  <div
    :class="{ 'application-hidden' : isNavDrawerOpen }"
    id="app">
    <Nav />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

export default {
  name: 'App',
  components: { Footer, Nav },
  computed: mapGetters('application', ['isNavDrawerOpen'])
}
</script>

<style>
.application-hidden {
  height: 100vh;
  overflow: hidden;
}
</style>
