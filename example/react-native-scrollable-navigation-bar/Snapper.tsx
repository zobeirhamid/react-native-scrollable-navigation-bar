import React, { useMemo } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { useMeasurements } from './contexts/MeasurementsContext';
import { useAnimatedValue } from './contexts/AnimatedValueContext';

interface SnapperProps {}

const Snapper: React.FC<SnapperProps> = ({ children }) => {
  const { snapHeight, navigationBarHeight, headerHeight, statusBarHeight } =
    useMeasurements();
  const animatedValue = useAnimatedValue();

  const offset =
    navigationBarHeight === headerHeight
      ? navigationBarHeight
      : headerHeight - statusBarHeight - snapHeight;

  const style = useMemo(() => {
    return {
      ...StyleSheet.absoluteFillObject,
      height: snapHeight,
      transform: [
        {
          translateY: animatedValue.interpolate({
            inputRange: [0, snapHeight],
            outputRange: [offset, offset - snapHeight],
            extrapolateLeft:
              headerHeight === navigationBarHeight ? 'clamp' : 'extend',
          }),
        },
        {
          scaleY: animatedValue.interpolate({
            inputRange: [0, snapHeight / 2],
            outputRange: [1, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  }, [animatedValue, snapHeight, offset, navigationBarHeight, headerHeight]);

  return (
    <Animated.View style={style} pointerEvents={'box-none'}>
      {children}
    </Animated.View>
  );
};

export default Snapper;
