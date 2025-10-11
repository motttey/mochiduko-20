import { shallowMount } from '@vue/test-utils';
import NameCard from '@/components/NameCard.vue';

describe('NameCard', () => {
  it('renders', () => {
    const wrapper = shallowMount(NameCard, {
      // setup.js で Vuetify を global に入れているので指定不要
      // global: { plugins: [createVuetify()] }
    });
    expect(wrapper.exists()).toBe(true);
  });
});
