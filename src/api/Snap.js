// @flow
import * as React from 'react';
import { Animated, View } from 'react-native';
import { ContextConsumer } from './Context';
import type { SnapProps } from '../types';

class Snap extends React.Component<SnapProps> {
  render() {
    const {
      snapHeight,
      children,
      animatedValue,
      headerHeight,
      backgroundColor
    } = this.props;
    if (snapHeight === 0) return null;

    return (
      <Animated.View
        style={{
          position: 'absolute',
          top: headerHeight,
          zIndex: 1,
          height: snapHeight,
          transform: [
            {
              translateY: animatedValue.interpolate({
                inputRange: [-1, 0, snapHeight],
                outputRange: [1, 0, -snapHeight],
                extrapolateRight: 'clamp'
              })
            }
          ]
        }}
      >
        <Animated.View
          style={{
            transform: [
              {
                scaleY: animatedValue.interpolate({
                  inputRange: [0, 50],
                  outputRange: [1, 0],
                  extrapolate: 'clamp'
                })
              }
            ]
          }}
        >
          {children}
        </Animated.View>
      </Animated.View>
    );
  }
}

export default ContextConsumer(Snap);
