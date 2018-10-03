<!--
File: Card.vue

Description: Generic material Card component. Use for
reusable styling.
**Note** class `card` is defined inexternal sheet materialize.css

Author: Vapurrmaid <vapurrmaid@gmail.com>

Copyright (C) 2018 kevinmarley.ca <vapurrmaid@gmail.com>

This code can be freely viewed and forked as per the GitHub
terms of service. However, it may not be modified or distributed.
The members of {@link https://github.com/KevinMarley} hold the sole rights
for contribution and modification.
-->
<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
/** Card component **/
export default {
  name: 'Card'
}
</script>
