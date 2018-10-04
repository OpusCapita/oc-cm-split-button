import 'babel-polyfill';
import React from 'react';
import 'font-awesome/scss/font-awesome.scss';
import { storiesOf, addDecorator } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
} from '@storybook/addon-knobs';
import styled from 'styled-components';
import SplitButton, { Icon } from '../src/index';
import './stories.scss';

addDecorator(withKnobs);

const primitiveStories = storiesOf('oc-cm-splitbutton', module);

primitiveStories.add('Icon', () => (
  <Icon
    faIcon={text('icon', 'fa fa-check')}
    color={text('color', 'red')}
    size={text('size', '10rem')}
    margin={text('margin', '10rem 0 0 10rem')}
    padding={text('padding', '0')}
  />
));

primitiveStories.add('SplitButton', () => {
  const menuItems = [
    {
      id: 'item_id_21',
      title: 'Item 1',
      onClick: () => console.log('Item 1 clicked'), // eslint-disable-line
    },
    {
      id: 'item_id_22',
      title: 'Item 2',
      onClick: () => console.log('Item 2 clicked'), // eslint-disable-line
    },
    {
      id: 'item_id_d1',
      type: 'divider',
    },
    {
      id: 'item_id_23',
      title: 'Item 3',
      onClick: () => console.log('Item 3 clicked'), // eslint-disable-line
      disableClosing: true,
    },
  ];

  const Wrapper = styled.section`
    padding-left: 20px;
    background: #fff;
  `;

  return (
    <Wrapper>
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
        disabled={boolean('disabled', false)}
        onButtonClick={() => {}}
        menuDisabled={boolean('menuDisabled', false)}
        primary={boolean('primary', false)}
        menuItems={menuItems}
      />
    </Wrapper>
  );
});
