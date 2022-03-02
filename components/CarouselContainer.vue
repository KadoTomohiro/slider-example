<template>
  <div class="my-vuetify">
    <!-- これがないとスタイル崩れる。逆に、これを閉じ込めておけばスタイル漏洩しないかも -->
    <v-app class="v-application ">
      <!--  サイズをこれで制御。width, heightはpropsにしてバインド  -->
      <v-sheet width="800" height="500">
        <!-- カルーセルここから。細かい設定はDocument参照-->
        <v-carousel
          ref="carousel"
          :value="value"
          class="red--text"
          :hide-delimiter-background="true"
          delimiter-icon="mdi-circle light-blue--text text--darken-2"
          :touch="onTouch"
          :vertical="true"
          @change="onChange"
        >
          <slot></slot>
        </v-carousel>
      </v-sheet>
    </v-app>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CarouselContainer',
  data() {
    return {
      items: []
    }
  },
  props: {
    value: {type: Number, required: false, default: 0}
  },

  methods: {
    onChange(value: number) {
      console.log(value)
      this.$emit('change', value)
    }
  },
  computed: {
    itemNames(): string[] {
      return ['1', '2', '3', '4']
    },
    itemCount(): number  {
      return [this.$refs.carousel ?? []].flat().length
    },
    onTouch() {
      return {
        left: () => {},
        right: () => {},
        up: () => {
          console.log('up event')
          this.onChange(this.value + 1)
        },
        down: () => this.onChange(this.value - 1)
      }
    }
  }
})
</script>

<style scoped lang="scss">
::v-deep .v-application--wrap {
  min-height: fit-content;
}
</style>
