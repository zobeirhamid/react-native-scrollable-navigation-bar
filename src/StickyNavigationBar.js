import React from 'react';
import { Animated, View } from 'react-native';
import { STATUS_BAR_HEIGHT } from './constants';
import NavigationBar from './NavigationBar';

class StickyNavigationBar extends React.Component {
  render() {
    const {
      animatedValue,
      stickyHeight,
      children,
      backgroundColor,
      NavigationBarComponent = NavigationBar,
      navigationBarHeight
    } = this.props;
    return (
      <View
        style={{
          zIndex: 10,
          position: 'absolute',
          left: 0,
          right: 0,
          height: navigationBarHeight
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
                    navigationBarHeight - STATUS_BAR_HEIGHT,
                    navigationBarHeight
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
            height: navigationBarHeight + stickyHeight,
            justifyContent: 'flex-end',
            transform: [
              {
                translateY: animatedValue.interpolate({
                  inputRange: [0, navigationBarHeight],
                  outputRange: [0, -navigationBarHeight],
                  extrapolate: 'clamp'
                })
              }
            ]
          }}
        >
          <NavigationBarComponent {...this.props} />
          {children}
        </Animated.View>
      </View>
    );
  }
}

export default StickyNavigationBar;
