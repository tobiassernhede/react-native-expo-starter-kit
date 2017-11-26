import React, { PureComponent } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default class Icon extends PureComponent {

  render() {
    return (
      <Ionicons {...this.props} />
    );
  }
}

