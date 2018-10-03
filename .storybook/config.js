import {
  configure
} from '@storybook/react';
import {
  setOptions
} from '@storybook/addon-options';

function loadStories() {
  require('../stories/index.story.jsx');
}

configure(loadStories, module);

setOptions({
  name: 'CM split-button Storybook',
  addonPanelInRight: true,
});
