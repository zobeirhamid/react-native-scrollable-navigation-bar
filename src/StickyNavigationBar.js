import React from 'react';
import { Animated, View } from 'react-native';
import { NAVIGATION_BAR_HEIGHT, STATUS_BAR_HEIGHT } from './constants';
import NavigationBar from './NavigationBar';

class StickyNavigationBar extends React.Component {
  render() {
    const {
      animatedValue,
      stickyHeight,
      children,
      backgroundColor
    } = this.props;
    return (
      <View
        style={{
          zIndex: 10,
          position: 'absolute',
          left: 0,
          right: 0,
          height: NAVIGATION_BAR_HEIGHT
        }}
      >
        <Animated.View
          style={{
            zIndex: 10,
            height: STATUS_BAR_HEIGHT,
            backgroundColor,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            transform: [
              {
                translateY: animatedValue.interpolate({
                  inputRange: [
                    NAVIGATION_BAR_HEIGHT - STATUS_BAR_HEIGHT,
                    NAVIGATION_BAR_HEIGHT
                  ],
                  outputRange: [0, -STATUS_BAR_HEIGHT],
                  extrapolate: 'clamp'
                })
              }
            ]
          }}
        />
        <Animated.View
          style={{
            height: NAVIGATION_BAR_HEIGHT + stickyHeight,
            justifyContent: 'flex-end',
            transform: [
              {
                translateY: animatedValue.interpolate({
                  inputRange: [0, NAVIGATION_BAR_HEIGHT],
                  outputRange: [0, -NAVIGATION_BAR_HEIGHT],
                  extrapolate: 'clamp'
                })
              }
            ]
          }}
        >
          <NavigationBar {...this.props} />
          {children}
        </Animated.View>
      </View>
    );
  }
}

export default StickyNavigationBar;
