import { shallowMount } from '@vue/test-utils';
import NameCard from '@/components/NameCard.vue';

describe('NameCard', () => {
  it('renders', () => {
    const wrapper = shallowMount(NameCard, {
      global: {
        stubs: {
          'font-awesome-icon': true,
          'v-card': true,
          'v-card-title': true,
          'v-layout': true,
        },
      },
    })
    expect(wrapper.exists()).toBe(true);
  });
});
