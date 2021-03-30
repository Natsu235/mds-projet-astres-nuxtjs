import { shallowMount } from "@vue/test-utils";
import StarList from '@/components/StarList.vue'

const factory = () => {
  return shallowMount(StarList, {
  });
};

describe('StarList', () => {
  test("mounts properly", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
})
