<!--
File: Section.vue

Description: Creates a <section> element with horizontal rules
separation.

Author: Vapurrmaid <vapurrmaid@gmail.com>

Copyright (C) 2018 kevinmarley.ca <vapurrmaid@gmail.com>

This code can be freely viewed and forked as per the GitHub
terms of service. However, it may not be modified or distributed.
The members of {@link https://github.com/KevinMarley} hold the sole rights
for contribution and modification.
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
