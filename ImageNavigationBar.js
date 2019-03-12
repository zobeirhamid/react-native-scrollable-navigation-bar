import * as React from 'react';
import { Animated, Platform, StatusBar } from 'react-native';
import { NAVIGATION_BAR_HEIGHT } from './constants';

class ImageNavigationBar extends React.Component {
  render() {
    const {
      animatedValue,
      height,
      image,
      parallax,
      backgroundColor,
      imageToNavBar,
      imageStyle
    } = this.props;
    return (
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor
        }}
      >
        <Animated.View
          style={{
            opacity: imageToNavBar
              ? animatedValue.interpolate({
                  inputRange: [0, height - NAVIGATION_BAR_HEIGHT],
                  outputRange: [1, 0],
                  extrapolate: 'clamp'
                })
              : undefined,
            height: imageToNavBar
              ? animatedValue.interpolate({
                  inputRange: [0, height - NAVIGATION_BAR_HEIGHT],
                  outputRange: [height, NAVIGATION_BAR_HEIGHT],
                  extrapolateLeft: 'clamp'
                })
              : undefined,
            transform: [
              {
                translateY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, parallax ? -0.4 : -1],
                  extrapolateLeft: 'clamp'
                })
              }
            ]
          }}
        >
          <Animated.Image
            source={image}
            style={[
              {
                height,
                transform: [
                  {
                    scale: animatedValue.interpolate({
                      inputRange: [-10, 0],
                      outputRange: [1.1, 1],
                      extrapolateRight: 'clamp'
                    })
                  }
                ]
              },
              imageStyle
            ]}
          />
        </Animated.View>
      </Animated.View>
    );
  }
}

export default ImageNavigationBar;
