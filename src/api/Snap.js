// @flow
import * as React from 'react';
import { Animated, View } from 'react-native';
import { ContextConsumer } from './Context';
import type { SnapProps } from '../types';

class Snap extends React.Component<SnapProps> {
  render() {
    const { snapHeight, children, animatedValue } = this.props;
    if (snapHeight === 0) return null;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Animated.View
          style={{
            opacity: animatedValue.interpolate({
              inputRange: [0, snapHeight],
              outputRange: [1, 0],
              extrapolate: 'clamp'
            }),
            transform: [
              {
                scaleY: animatedValue.interpolate({
                  inputRange: [0, snapHeight],
                  outputRange: [1, 0],
                  extrapolate: 'clamp'
                })
              }
            ]
          }}
        >
          {children}
        </Animated.View>
      </View>
    );
  }
}

export default ContextConsumer(Snap);
