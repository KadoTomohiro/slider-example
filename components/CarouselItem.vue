<template>
  <v-carousel-item>
    <slot></slot>
  </v-carousel-item>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CarouselItem'
})
</script>

<style scoped>

</style>
