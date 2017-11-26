/**--- Node Modules ---**/
import React, { PureComponent } from 'react';
import { Text as RNText } from 'react-native';

/**--- Core ---**/
import { BASE_STYLES } from 'app/core/baseStyles';

export default class Text extends PureComponent {
  render() {
    return (
      <RNText
        {...this.props}
        style={[
          BASE_STYLES.TEXT,
          this.props.style
      ]}
    >
        {this.props.children}
    </RNText>
    );
  }
}