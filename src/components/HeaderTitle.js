// @flow
import * as React from 'react';
import { Animated, View } from 'react-native';
import type { HeaderTitleProps } from '../types';

class HeaderTitle extends React.Component<HeaderTitleProps> {
  render() {
    const { children, style, containerStyle } = this.props;
    return (
      <View
        style={[
          { flex: 1, justifyContent: 'flex-end', padding: 15 },
          containerStyle
        ]}
        pointerEvents="box-none"
      >
        <Animated.Text
          style={[
            {
              fontWeight: 'bold',
              fontSize: 36,
              color: 'black'
            },
            style
          ]}
        >
          {children}
        </Animated.Text>
      </View>
    );
  }
}

export default HeaderTitle;
