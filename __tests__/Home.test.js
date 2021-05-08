import React from 'react';
import Home from '../src/components/Home/Home.tsx';
import ManualTestCreation from '../src/components/TestCreation/ManualTestCreation/ManualTestCreation.tsx';
import Monaco from '../src/components/Monaco/Monaco.tsx';
import SideNavBar from '../src/components/SideNavBar/SideNavBar.tsx';
import { shallow } from 'enzyme';

const wrapper = shallow(<Home />);

describe ('<Home /> renders child components', () => {
  test('renders <SideNavBar />', () => {
    expect(wrapper.containsMatchingElement(<SideNavBar />)).toEqual(true);
  });
  test('renders <ManualTestCreation />', () => {
    expect(wrapper.containsMatchingElement(<ManualTestCreation />)).toEqual(true);
  });
  test('renders <Monaco />', () => {
    expect(wrapper.containsMatchingElement(<Monaco />)).toEqual(true);
  })
});