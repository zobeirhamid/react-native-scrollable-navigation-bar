import React, { useMemo } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { useMeasurements } from './contexts/MeasurementsContext';
import { useAnimatedValue } from './contexts/AnimatedValueContext';

interface HeaderContainerProps {
  parallax?: number;
  scale?: number;
  fadeOut?: boolean;
  HeaderForegroundComponent?: React.ComponentType<any>;
  HeaderBackgroundComponent?: React.ComponentType<any>;
}

const HeaderContainer: React.FC<HeaderContainerProps> = (props) => {
  const { navigationBarHeight, headerHeight, snapHeight } = useMeasurements();
  const animatedValue = useAnimatedValue();

  const {
    parallax = 0,
    scale = 1.1,
    fadeOut = false,
    HeaderForegroundComponent = () => null,
    HeaderBackgroundComponent = () => null,
  } = props;

  const containerStyle = useMemo(() => {
    return {
      //...StyleSheet.absoluteFillObject,
      height: headerHeight,
      transform: [
        {
          translateY: snapHeight
            ? animatedValue.interpolate({
                inputRange: [0, snapHeight],
                outputRange: [0, snapHeight],
                extrapolate: 'clamp',
              })
            : 0,
        },
      ],
    };
  }, [snapHeight, animatedValue, headerHeight]);

  const backgroundStyle = useMemo(() => {
    return {
      height: headerHeight,
      opacity: fadeOut
        ? animatedValue.interpolate({
            inputRange: [0, headerHeight - navigationBarHeight],
            outputRange: [1, 0],
            extrapolate: 'clamp',
          })
        : 1,
      transform: [
        {
          scale: animatedValue.interpolate({
            inputRange: [-10, 0],
            outputRange: [scale, 1],
            extrapolateRight: 'clamp',
          }),
        },
        {
          translateY: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, parallax],
            extrapolateLeft: 'clamp',
          }),
        },
      ],
    };
  }, [
    animatedValue,
    scale,
    parallax,
    headerHeight,
    navigationBarHeight,
    fadeOut,
  ]);
  const foregroundStyle = useMemo(() => {
    return [StyleSheet.absoluteFillObject, { bottom: snapHeight }];
  }, [snapHeight]);

  if (headerHeight === navigationBarHeight) return null;

  return (
    <>
      <Animated.View style={containerStyle}>
        <Animated.View style={backgroundStyle}>
          <HeaderBackgroundComponent />
        </Animated.View>
        <Animated.View style={foregroundStyle} pointerEvents={'box-none'}>
          <HeaderForegroundComponent />
        </Animated.View>
      </Animated.View>
    </>
  );
};

export default HeaderContainer;
