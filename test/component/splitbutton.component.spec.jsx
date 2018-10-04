/* eslint-disable no-unused-expressions */
import React from 'react';
import renderer from 'react-test-renderer';
import SplitButton from '../../src/splitbutton.component';
import Icon from '../../src/icon.component';

const menuItems = [
  {
    id: 'item_id_21',
    title: 'Item 1',
    onClick: () => {}, // es
  },
  {
    id: 'item_id_22',
    title: 'Item 2',
    onClick: () => {},
  },
  {
    id: 'item_id_d1',
    type: 'divider',
  },
  {
    id: 'item_id_23',
    title: 'Item 3',
    onClick: () => {},
    disableClosing: true,
  },
];

describe('SplitButton', () => {
  test('renders correctly (enabled)', () => {
    const splitButton = renderer
      .create(
        <SplitButton
          id="split-button"
          title="Split Button"
          icon={
            <Icon
              faIcon="fa fa-check"
              aria-hidden="true"
              color="lightgreen"
              size="1.5rem"
              margin="0 0.5rem 0 0"
            />
          }
          disabled={false}
          onButtonClick={() => {}}
          menuDisabled={false}
          menuItems={menuItems}
        />,
      )
      .toJSON();
    expect(splitButton).toMatchSnapshot();
  });

  test('renders correctly (disabled)', () => {
    const splitButton = renderer
      .create(
        <SplitButton
          id="split-button"
          title="Split Button"
          icon={
            <Icon
              faIcon="fa fa-check"
              aria-hidden="true"
              color="lightgreen"
              size="1.5rem"
              margin="0 0.5rem 0 0"
            />
          }
          disabled={false}
          onButtonClick={() => {}}
          menuDisabled={false}
          menuItems={menuItems}
        />,
      )
      .toJSON();
    expect(splitButton).toMatchSnapshot();
  });
});
