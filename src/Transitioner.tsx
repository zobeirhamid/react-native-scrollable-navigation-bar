import React, { useMemo } from 'react';
import { useAnimatedValue } from './contexts/AnimatedValueContext';
import { useMeasurements } from './contexts/MeasurementsContext';
import { Animated, ViewStyle } from 'react-native';

interface TransitionerProps {
  style?: ViewStyle;
  active?: boolean;
  offset?: number;
  distance?: number;
}

const Transitioner: React.FC<TransitionerProps> = (props) => {
  const { transitionPoint, headerHeight, navigationBarHeight } =
    useMeasurements();
  const animatedValue = useAnimatedValue();

  const {
    children,
    style,
    active = true,
    offset = navigationBarHeight,
    distance = offset,
  } = props;

  const transitionStyle = useMemo(() => {
    if (!active) return style;
    return [
      style,
      {
        opacity:
          headerHeight !== navigationBarHeight
            ? animatedValue.interpolate({
                inputRange: [
                  transitionPoint - offset,
                  transitionPoint - offset + distance,
                ],
                outputRange: [0, 1],
                extrapolate: 'clamp',
              })
            : 1,
      },
    ];
  }, [
    active,
    headerHeight,
    navigationBarHeight,
    transitionPoint,
    animatedValue,
    style,
    offset,
    distance,
  ]);

  return (
    <Animated.View style={transitionStyle} pointerEvents={'box-none'}>
      {children}
    </Animated.View>
  );
};

export default Transitioner;
