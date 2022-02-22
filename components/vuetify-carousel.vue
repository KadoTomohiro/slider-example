<template>
  <div>
    <button @click="decrement()">-</button>{{value}}<button @click="increment()">+</button>
    <!-- これがないとスタイル崩れる。逆に、これを閉じ込めておけばスタイル漏洩しないかも -->
    <CarouselContainer :value="value" @change="onChange">
      <template v-for="(item, i) in items" >
          <CarouselItem :key="i">
            <img :src="item.src">
          </CarouselItem>
      </template>
    </CarouselContainer>
    <SlideStepper :value="value" :items="itemNames" @change="onChange">
    </SlideStepper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VuetifyCarousel',
  data() {
    return {
      value: 3,
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
  computed: {
    itemCount(): number {
      return this.items.length
    },
    itemNames(): string[] {
      return this.items
        .map(item => (item.src.match(/\/(?<name>[^/]*)\.jpg$/)?.groups?.name ?? 'not named'))
    }
  },
  mounted() {
  },
  methods: {
    increment() {
      if(this.value >= this.itemCount - 1) {
        this.value = 0
        return
      }
      this.value += 1
    },
    decrement() {
      if (this.value <= 0) {
        this.value = this.itemCount - 1
        return
      }
      this.value -= 1
    },
    onChange(value: number) {
      this.value = value
    },

  }
})
</script>

<style scoped>
.image-panel image {
}
</style>
