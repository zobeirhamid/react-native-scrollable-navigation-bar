// @flow
import * as React from 'react';
import { Animated, View } from 'react-native';
import { scaleable, disappear } from '../hoc';
import { ContextConsumer } from '../Context';
import { NAVIGATION_BAR_HEIGHT } from '../../constants';
import type {
  HeaderBackgroundProps,
  HeaderBackgroundDefaultProps
} from '../../types';

class HeaderBackground extends React.Component<HeaderBackgroundProps> {
  static defaultProps: HeaderBackgroundDefaultProps = {
    navigationBarHeight: NAVIGATION_BAR_HEIGHT,
    headerHeight: 0,
    fadeOut: false,
    parallax: 0
  };

  render() {
    const {
      backgroundColor,
      children,
      fadeOut,
      parallax,
      headerHeight,
      navigationBarHeight,
      animatedValue
    } = this.props;
    return (
      <View style={{ backgroundColor }}>
        <Animated.View
          pointerEvents="box-none"
          style={{
            transform: [
              {
                translateY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, parallax]
                })
              }
            ]
          }}
        >
          {disappear(
            scaleable(
              <Animated.View
                style={{
                  height: headerHeight,
                  backgroundColor
                }}
              >
                {children}
              </Animated.View>,
              animatedValue
            ),
            animatedValue,
            0,
            headerHeight - (navigationBarHeight + 30),
            fadeOut
          )}
        </Animated.View>
      </View>
    );
  }
}

export default ContextConsumer(HeaderBackground);
