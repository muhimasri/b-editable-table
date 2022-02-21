import { shallowMount } from '@vue/test-utils'
import AddRemoveExample from '../../dev/examples/add-remove-example.vue'

describe('AddRemoveExample.vue', () => {
  it('Find name cell when passed', done => {
    const wrapper = shallowMount(AddRemoveExample, {})
    // expect(wrapper.text()).toMatch(msg)
    // expect(nameCell.exists()).toBe(true);
    wrapper.vm.$nextTick(() => {
      const nameCell = wrapper.find('.name-col');
      expect(nameCell.exists()).toBe(true);
      done();
    })
  })
})
