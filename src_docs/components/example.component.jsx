import React from 'react';
import Example from '../../src/index';

export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getMenuItems = () => ([
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
  ]);

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <Example
          id="split-button-example-id"
          title="Save"
          menuItems={this.getMenuItems()}
        />
      </div>
    );
  }
}
