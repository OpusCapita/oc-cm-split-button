/* eslint-disable no-unused-expressions */
import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../../src/icon.component';

describe('Icon', () => {
  test('renders correctly', () => {
    const icon = renderer
      .create(<Icon faIcon="fa fa-check" color="red" size="10rem" />)
      .toJSON();
    expect(icon).toMatchSnapshot();
  });
});
