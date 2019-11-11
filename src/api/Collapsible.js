// @flow
import * as React from 'react';
import { Animated } from 'react-native';
import { ContextConsumer } from './Context';
import { STATUS_BAR_HEIGHT } from '../constants';
import type { CollapsibleProps } from '../types';

class Collapsible extends React.Component<CollapsibleProps> {
  static defaultProps = {
    active: true,
    stayCollapsed: false,
    style: {},
    height: 0
  };

  render() {
    const {
      children,
      style,
      active,
      navigationBarHeight,
      height,
      animatedValue,
      transitionPoint,
      stayCollapsed
    } = this.props;

    let translateY: number | Animated.Value = 0;
    if (active && stayCollapsed) {
      translateY = animatedValue.interpolate({
        inputRange: [
          transitionPoint - navigationBarHeight,
          transitionPoint - STATUS_BAR_HEIGHT
        ],
        outputRange: [0, -navigationBarHeight + STATUS_BAR_HEIGHT],
        extrapolate: 'clamp'
      });
    } else if (active) {
      translateY = Animated.multiply(
        Animated.diffClamp(
          animatedValue.interpolate({
            inputRange: [
              transitionPoint - navigationBarHeight,
              transitionPoint - navigationBarHeight + 1
            ],
            outputRange: [0, 1],
            extrapolateLeft: 'clamp'
          }),
          0,
          height
        ),
        -1
      );
    }
    return (
      <Animated.View
        pointerEvents="box-none"
        {...this.props}
        height={undefined}
        style={[
          {
            zIndex: 1,
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            transform: [
              {
                translateY
              }
            ]
          },
          style
        ]}
      >
        {children}
      </Animated.View>
    );
  }
}

export default ContextConsumer(Collapsible);
