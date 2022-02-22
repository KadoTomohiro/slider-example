<template>
  <div class="container">
    <button v-for="(item, index) in items" :key="index" type="button" class="selector" :class="{active: isActive(index)}" @click="onChange(index)">
      {{item}}
    </button>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue'

export default Vue.extend({
  name: 'SlideStepper',
  props: {
    value: {type: Number, required: false, default: 0},
    items: {type: Array as PropType<string[]>, required: false, default:() => []}
  },
  computed: {

  },
  methods: {
    onChange(value: number):void {
      this.$emit('change', value)
    },
    isActive(index: number): boolean {
      return this.value === index
    }
  }
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
}
.selector {
  border: 1px solid #909090;
  border-radius: 3px;
  padding: 0.4em;
}
.active{
  background-color: #ffd1d1;
}
</style>
