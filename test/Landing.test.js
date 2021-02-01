import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Landing from '../src/components/Landing/Landing.tsx';

// jest.mock('Lan')

describe('<Landing />', () => {
  it('renders an input field', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper.find('.input')).toBeDefined();
  });
});
