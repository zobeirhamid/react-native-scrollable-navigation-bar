// @flow
import * as React from 'react';
import { Animated } from 'react-native';
import { ContextConsumer } from '../Context';
import type {
  HeaderForegroundProps,
  HeaderForegroundDefaultProps
} from '../../types';

class HeaderForeground extends React.Component<HeaderForegroundProps> {
  static defaultProps: HeaderForegroundDefaultProps = {
    headerHeight: 0
  };

  render() {
    const { children, headerHeight } = this.props;
    return (
      <Animated.View
        pointerEvents="box-none"
        style={{
          zIndex: 1000,
          height: headerHeight,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }}
      >
        {children}
      </Animated.View>
    );
  }
}

export default ContextConsumer(HeaderForeground);
