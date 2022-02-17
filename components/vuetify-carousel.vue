<template>
  <!-- これがないとスタイル崩れる。逆に、これを閉じ込めておけばスタイル漏洩しないかも -->
  <v-app>
    <!--  サイズをこれで制御。width, heightはpropsにしてバインド  -->
    <v-sheet width="800" height="500">
      <!-- カルーセルここから。細かい設定はDocument参照-->
      <v-carousel
        height="auto"
        class="red--text"
        :hide-delimiter-background="true"
        delimiter-icon="mdi-circle blue--text"
      >
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
    </v-sheet>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VuetifyCarousel',
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
  mounted() {
  }
})
</script>

<style scoped>

</style>
