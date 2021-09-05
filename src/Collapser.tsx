import React, { useMemo } from 'react';
import { Animated } from 'react-native';
import { useAnimatedValue } from './contexts/AnimatedValueContext';

interface CollapserProps {
  active?: boolean;
  distance: number;
  offset?: number;
  stayCollapsed?: boolean;
  height?: number;
}

const Collapser: React.FC<CollapserProps> = ({
  active = false,
  offset = 0,
  children,
  distance,
  stayCollapsed = false,
  height = distance,
}) => {
  const animatedValue = useAnimatedValue();

  const translateY = useMemo(() => {
    if (stayCollapsed)
      return animatedValue.interpolate({
        inputRange: [offset, offset + distance],
        outputRange: [0, -distance],
        extrapolate: 'clamp',
      });
    return Animated.multiply(
      Animated.diffClamp(
        animatedValue.interpolate({
          inputRange: [offset, offset + 1],
          outputRange: [0, 1],
          extrapolateLeft: 'clamp',
        }),
        0,
        distance
      ),
      -1
    );
  }, [animatedValue, distance, stayCollapsed, offset]);

  const collapsibleStyle = useMemo(() => {
    if (!active) return { height };
    return {
      height,
      transform: [{ translateY }],
    };
  }, [active, translateY, height]);

  return (
    <>
      <Animated.View style={collapsibleStyle}>{children}</Animated.View>
    </>
  );
};

export default Collapser;
