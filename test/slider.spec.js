import {createLocalVue, mount} from '@vue/test-utils';

import Vuetify from 'vuetify'
import Vue from "vue";
import CarouselContainer from '~/components/CarouselContainer.vue';
Vue.use(Vuetify)
describe('carouselContainer', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })


  it('should ', () => {
    const wrapper = mount(CarouselContainer, {
      localVue,
      vuetify,
      props: {value:  0},
    })
    const carousel = wrapper.findComponent({name: 'v-carousel'})
    console.log(carousel.vm.$props.touch)
    carousel.vm.$props.touch.up()
    carousel.trigger('up')

    const emitted = wrapper.emitted('change')
    console.log(emitted)

});
})

