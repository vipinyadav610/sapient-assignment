import React from 'react';
import { shallow } from 'enzyme';
import PostSearch from './PostSearch';

describe('<PostSearch />', () => {
  test('renders', () => {
    const wrapper = shallow(<PostSearch />);
    expect(wrapper).toMatchSnapshot();
  });
});
