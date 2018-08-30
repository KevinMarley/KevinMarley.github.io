<!--
A Sectioned Container, optimized for Mobile.
Fills a minimum screen height
 -->
<template>
  <section class="section">
    <div class="section-content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section'
}
</script>

<style lang="scss">
@import '../../sass/abstracts/mixins';

.section {
  width: 95%;
  min-width: 320px;
  margin: 0 auto;
}

.section-content {
  @include ruler(95%)
}
</style>
