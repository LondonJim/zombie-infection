import React from 'react';
import { shallow, render } from 'enzyme';
import CityLink from '../CityLink.js'

describe('CityLink', () => {
  it('renders a button to route to a city', () => {
    const wrapper = render(<CityLink city="city" active={true}/>)
    expect(wrapper.find('.clickable').text()).toMatch("city")
  });
});

describe('#cityRoute', () => {
  it('returns the route path for a city', () => {
    const wrapper = shallow(<CityLink city="city" active={true}/>)
    expect(wrapper.instance().cityRoute()).toMatch("/city")
  });
});
