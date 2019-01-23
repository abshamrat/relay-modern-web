import React, {Component} from 'react';
import {card, Card} from 'antd';
import BaseLayout from '../layouts/BaseLayout.jsx';

class UserTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <BaseLayout>
        <Card title="User List" bordered={false}>
          
        </Card>
      </BaseLayout>
    );
  }
}