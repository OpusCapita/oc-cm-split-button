# oc-cm-split-button

### Description

Describe the component here

### Installation

```
npm install @opuscapita/oc-cm-split-button
```

### Demo

View the [DEMO](https://opuscapita.github.io/oc-cm-split-button)

### Builds

#### UMD

The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.

#### CommonJS/ES Module

You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.

- With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
- Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API

#### SplitButton

| Prop name     | Type           | Default  | Description                                                                                                         |
| ------------- | -------------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| id            | string         | required | The ID                                                                                                              |
| title         | string or node | required | Split button label                                                                                                  |
| menuItems     | array          | required | @opuscapita/react-dropdown: List of the dropdown menu items (check menuItems props from @opuscapita/react-dropdown) |
| disabled      | boolean        | false    | Whether or not button is disabled.                                                                                  |
| menuDisabled  | boolean        | false    | Whether or not dropdown menu is disabled.                                                                           |
| icon          | node           | null     | Button icon                                                                                                         |
| onButtonClick | function       | ()=>{}   | A callback fired when a button is selected.                                                                         |

#### Icon

| Prop name | Type   | Default  | Description                              |
| --------- | ------ | -------- | ---------------------------------------- |
| faIcon    | string | required | fontawesome icon name e.g. 'fa fa-check' |
| color     | string | black    | Icon color                               |
| size      | string | 14px     | Icon font size                           |
| padding   | string | 0        | Icon paddings                            |
| margin    | string | 0        | Icon margins                             |

### Code example

```jsx
import React from "react";
import SplitButton, { Icon } from "@opuscapita/oc-cm-split-button";

export default class ReactView extends React.Component {
  getMenuItems = () => [
    {
      id: "item_id_21",
      title: "Item 1",
      onClick: () => {} // es
    },
    {
      id: "item_id_22",
      title: "Item 2",
      onClick: () => {}
    },
    {
      id: "item_id_d1",
      type: "divider"
    },
    {
      id: "item_id_23",
      title: "Item 3",
      onClick: () => {},
      disableClosing: true
    }
  ];

  renderIcon = () => (
    <Icon
      faIcon="fa fa-check"
      color="lightgreen"
      size="1.5rem"
      margin="0 0.5rem 0 0"
    />
  );

  render() {
    return (
      <SplitButton
        id="split-button-example-id"
        title="Save"
        menuItems={this.getMenuItems()}
        icon={this.renderIcon()}
      />
    );
  }
}
```
