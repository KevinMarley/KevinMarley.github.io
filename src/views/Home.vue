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
