import * as React from 'react';
import { Animated, Platform, StatusBar } from 'react-native';

class ImageNavigationBar extends React.Component {
  render() {
    const {
      animatedValue,
      height,
      image,
      parallax = 0,
      backgroundColor,
      imageToNavBar,
      imageStyle,
      ImageComponent = Animated.Image,
      navigationBarHeight
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
                  inputRange: [0, height - navigationBarHeight],
                  outputRange: [1, 0],
                  extrapolate: 'clamp'
                })
              : undefined,
            height: imageToNavBar
              ? animatedValue.interpolate({
                  inputRange: [0, height - navigationBarHeight],
                  outputRange: [height, navigationBarHeight],
                  extrapolateLeft: 'clamp'
                })
              : undefined,
            transform: [
              {
                translateY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, parallax],
                  extrapolateLeft: 'clamp'
                })
              }
            ]
          }}
        >
          <ImageComponent
            source={image}
            imageHeight={height}
            imageStyle={imageStyle}
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
